import React from 'react';
import { CardColumns } from './node-cards.jsx';
import { ModeStatus } from './mode-status.jsx';

export function App() {
   return <div className="half">
      <ModeStatus />
      <CardColumns />
   </div>;
}
