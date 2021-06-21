import React from 'react';
import { useStore } from 'react-redux';

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
   return (
      <section className="frame card"
               col={props.col}>
         <div dangerouslySetInnerHTML={{__html:props.html}}></div>
         <TagList tags={tagList} />
         <Coords col={props.col} row={props.row} />
      </section>
   );
}

export function NodeCards(props) {
   let state = useStore().getState();
   console.log(state, state.entries);
   let cards = state.entries.map(
      (e, i) => <NodeCard key={i+1} col={props.grid.col} row={i+1} {...e}/>
   )
   return (
      <div className="col" col={props.grid.col}>
         { cards }
      </div>
   );
}
