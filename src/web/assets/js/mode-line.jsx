import React from 'react';
import { useStore } from 'react-redux';
import { Palette } from './palette.jsx';

export function ModeLine() {
   return (
      <div className="mode-line">
         <ModeStatus />
         <ModeLayout />
         <ModeContext />
         <ModeColumns />
         <ModePosition />
         <Palette />
      </div>
   );
}

export function ModeStatus() {
   let state = useStore().getState();
   let mode = state.session.mode
   let show = `mode item status ${ mode.show ? "" : "closed" }`;
   return <div className={show}>
      <span className="label">mode:</span>
      <span className="status">{ mode.name }</span>
   </div>
}

export function ModeLayout() {
   let state = useStore().getState();
   let layout = state.session.layout
   let show = `mode item layout ${ layout.show ? "" : "closed" }`;
   return <div className={show}>
      <span className="label">layout:</span>
      <span className="layout">{ layout.name }</span>
   </div>
}

export function ModeContext() {
   let state = useStore().getState();
   let context = state.session.keyboard.context
   let show = `mode item context ${ context.show ? "" : "closed" }`;
   return <div className={show}>
         <span className="label">layout:</span>
         <span className="context">{ context.name }</span>
   </div>
}


export function ModeColumns() {
   let state = useStore().getState();
   let numCols = state.entries.length
   return <div className="mode item columns">
         <span className="label">cols:</span>
         <span className="context">{ numCols }</span>
   </div>
}

export function ModePosition() {
   let state = useStore().getState();
   let nav = state.nav;
   let { row, col } = nav;
   return <div className="mode item position">
         <span className="label">pos:</span>
         <span className="context">{ row },{ col }</span>
   </div>
}
