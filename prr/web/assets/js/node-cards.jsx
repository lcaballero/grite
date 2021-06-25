import ReactDOM from 'react-dom';
import React, { useEffect, useRef } from 'react';
import { useStore } from 'react-redux';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { geom } from './geom';

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
         className="tic"
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
               stroke="white"
               fill="white"
               fontSize="15px"
               dy=".3em">{props.letter}</text>
         </g>
      </svg>
   )
}

function TagList(props) {
   return (
      <aside className="tags">{props.tags}</aside>
   )
}

function Coords(props) {
   return (
      <aside className="coords">row={props.row} col={props.col}</aside>
   )
}

function NodeCard(props) {
   let tagList = (props.tags || []).join(", ") || "";
   let { nav, row, col } = props;
   let isActive = nav.row == row && nav.col == col
   let show = isActive ? "active" : "";
   let ref = useRef(null);
   useEffect(() => {
      if (isActive) {
         ref.current.scrollIntoViewIfNeeded({
            block: 'center',
            inline: 'center',
            behavior: 'smooth',
            alignToTop: true
         });
      }
      if (row == 1) {
         ref.current.scrollIntoViewIfNeeded();
      }
   })
   let isEdit = props.mode == "edit";
   let c = `r${row}c${col}`;
   let cls = `frame card ${ show } ${ c }`;
   let tics = `tics ${ isEdit && isActive ? "" : "closed" }`;
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
      </section>
   );
}

export function CardColumns() {
   let state = useStore().getState();
   let { row, col } = state.nav
   return (
      <div className="cols">
      {
         state.entries.map(
            (e,i) => {
               return (
                  <NodeCards
                     key={`col-${i}`}
                     entries={e}
                     col={i+1}
                     nav={state.nav}
                     mode={state.mode}
                  />
               );
            })
      }
      </div>
   );
}

export function NodeCards(props) {
   let cards = props.entries.map(
      (e, i) => (
         <NodeCard key={i+1}
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
