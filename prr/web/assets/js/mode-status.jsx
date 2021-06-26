import React from 'react';
import { useStore } from 'react-redux';

export function ModeStatus() {
   let state = useStore().getState();
   let mode = state.session.mode
   let show = `mode ${ mode.show ? "" : "closed" }`;
   return <div className={show}>
      <div className="plane status">
         <span className="label">mode:</span>
         <span className="status">{ mode.name }</span>
      </div>
   </div>
}

export function ModeLayout() {
   let state = useStore().getState();
   let layout = state.session.layout
   let show = `mode ${ layout.show ? "" : "closed" }`;
   return <div className={show}>
      <div className="plane layout">
         <span className="label">layout:</span>
         <span className="layout">{ layout.name }</span>
      </div>
   </div>
}
