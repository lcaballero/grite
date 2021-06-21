import React from 'react';
import { NodeCards } from './node-cards.jsx';
import { ModeStatus } from './mode-status.jsx';

export function App() {
   return <div className="half">
      <ModeStatus />
      <NodeCards grid={{col:1}}/>
   </div>;
}
