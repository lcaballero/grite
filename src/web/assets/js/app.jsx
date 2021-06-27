import React from 'react';
import { useStore } from 'react-redux';
import { CardColumns } from './node-cards.jsx';
import { ModeLine } from './mode-line.jsx';

export function App() {
   let state = useStore().getState();
   let c = `${state.session.layout.name}`
   return <div unit="App" className={c}>
      <ModeLine />
      <CardColumns />
   </div>;
}
