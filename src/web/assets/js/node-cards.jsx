import React, { useEffect, useRef } from 'react';
import { useStore } from 'react-redux';
import { geom } from './geom';
import { ActionEditCard } from './action-edit-card';
import * as mode from './mode';

function Tic(props) {
   let { w, h } = props;
   w = (w || 24);
   h = (h || 24);
   var ref = useRef(null)
   useEffect((e) => {
      let p = props.getParent()
      let g = geom(p);
      if (!p || !g.view) {
         return
      }
      let d = g.view
      let dm = 11;
      let my = ((d.height || 0) / 2) - 10
      switch (props.letter) {
         case "h":
            ref.current.style.top = my+"px";
            ref.current.style.left = -dm+"px";
            break;
         case "l":
            ref.current.style.top = my+"px";
            ref.current.style.left = (d.width-dm)+"px";
            break;
         case "j":
            ref.current.style.top = (d.height-dm)+"px";
            ref.current.style.left = (d.width/2.0)+"px";
            break;
         case "k":
            ref.current.style.top = (-dm)+"px";
            ref.current.style.left = (d.width/2.0)+"px";
            break;
      }
   })
   return (
      <svg
         ref={ref}
         className="tic abs"
         xmlns="http://www.w3.org/2000/svg"
         width={w +"px"}
         height={h + "px"}>
         <g>
            <circle
               fill="rgb(0 113 227)"
               cx={(w/2)+"px"}
               cy={(h/2)+"px"}
               r={(h/2)+"px"}>
            </circle>
            <text
               x="50%"
               y="50%"
               textAnchor="middle"
               fill="white"
               fontSize="15px"
               dy=".3em">{props.letter}</text>
         </g>
      </svg>
   )
}

function TagList(props) {
   return <aside className="tags">{props.tags}</aside>
}

function Coords(props) {
   return <aside className="coords">row={props.row} col={props.col}</aside>
}

function NodeCard(props) {
   let tagList = (props.tags || []).join(", ") || "";
   let { nav, row, col } = props;
   let isActive = nav.row == row && nav.col == col
   let show = isActive ? "active" : "";
   let ref = useRef(null);
   useEffect(() => {
      if (!isActive) {
         return;
      }
      ref.current.scrollIntoView({
         block: 'center',
         behavior: 'smooth',
         alignToTop: true
      });
   })
   let isEdit = mode.isEdit(props.mode);
   let c = `r${row}c${col}`;
   let cls = `frame card ${ show } ${ c }`;
   // TODO: make isEdit for moving card or walking the graph in specific way
   let tics = `abs tics ${ isEdit && isActive ? "closed" : "closed" }`;
   let getParent = () => { return ref; }
   return (
      <section className={ cls }
               ref={ref}
               col={props.col}
               row={props.row}>
         <div dangerouslySetInnerHTML={{__html:props.html}}></div>
         <TagList tags={tagList} />
         <Coords col={props.col} row={props.row} />
         <div className={ tics }>
            <Tic letter="l" getParent={getParent}/>
            <Tic letter="h" getParent={getParent}/>
            <Tic letter="j" getParent={getParent}/>
            <Tic letter="k" getParent={getParent}/>
         </div>
         <ActionEditCard show={isEdit && isActive} getParent={getParent}/>
      </section>
   );
}

export function CardColumns() {
   let state = useStore().getState();
   let { row, col } = state.nav;
   let isEdit = mode.isEdit(state.session.mode.name);
   let c = `cols cf ${ isEdit ? "has-selection" : "" }`
   let ref = useRef(null);
   let getViewPort = () => { return ref; }
   return (
      <div className="view-port" ref={ref}>
         <div className={c}>
            {
               state.entries.map(
                  (e,i) => {
                     return (
                        <NodeCards
                           getViewPort={ getViewPort }
                           key={`col-${i}`}
                           entries={e.cards}
                           col={i+1}
                           nav={state.nav}
                           mode={state.session.mode}
                        />
                     );
                  })
            }
         </div>
      </div>
   );
}

export function NodeCards(props) {
   let cards = props.entries.map(
      (e, i) => (
         <NodeCard key={i+1}
                   getViewPort={props.getViewPort}
                   col={props.col}
                   row={i+1}
                   nav={props.nav}
                   mode={props.mode.name}
                   {...e}/>
      )
   )
   return (
      <div className="col" col={props.col}>
         { cards }
      </div>
   );
}
