import React from 'react';
import { useStore } from 'react-redux';

export function ModeStatus() {
   let state = useStore().getState();
   let mode = state.mode
   let show = `mode ${ mode.show ? "" : "closed" }`;
   return <div className={show}>
      <div className="plane">
         <span className="label">mode:</span>
         <span className="status">{ mode.name }</span>
      </div>
   </div>
}

