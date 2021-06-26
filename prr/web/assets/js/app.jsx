import React from 'react';
import { useStore } from 'react-redux';
import { CardColumns } from './node-cards.jsx';
import { ModeStatus, ModeLayout} from './mode-status.jsx';

export function App() {
   let state = useStore().getState();
   return <div className={state.session.layout.name}>
      <ModeStatus />
      <ModeLayout />
      <CardColumns />
   </div>;
}
