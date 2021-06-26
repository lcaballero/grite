import React, { useEffect, useRef } from 'react';
import { useStore } from 'react-redux';
import { geom } from './geom';
import { style } from './style';

function Tic(props) {
   let w = 24;
   let h = 24;
   return (
      <svg
         className="abs"
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
   );
}

export function ActionEditCard(props) {
   let ref = useRef(null);
   let isClosed = !props.show
   useEffect(() => {
      let g = geom(props.getParent).view;
      let pad = 16;
      style(ref.current, {
         top: 0,
         left: (g.width + pad),
         width: (g.width * .75)
      });
   })
   let c = `abs action-edit frame panel ${ isClosed ? "closed" : ""}`
   return (
      <div ref={ref} className={c}>
         <b>Edit Actions</b>
         <div>
            <dl className="rel">
               <dt><Tic letter="a"/></dt>
               <dd><b>a</b>dd card</dd>
            </dl>
            <dl className="rel">
               <dt><Tic letter="e"/></dt>
               <dd><b>e</b>dit card</dd>
            </dl>
            <dl className="rel">
               <dt><Tic letter="t"/></dt>
               <dd>edit <b>t</b>ags</dd>
            </dl>
            <dl className="rel">
               <dt><Tic letter="h"/></dt>
               <dd>show <b>h</b>elp</dd>
            </dl>
            <dl className="rel">
               <dt><Tic letter="m"/></dt>
               <dd><b>m</b>ove in direction</dd>
            </dl>
         </div>
      </div>
   );
}
