import { useStore } from 'react-redux';

export let types = {
   left: {type:'nav/left'},
   right: {type:'nav/right'},
   down: {type:'nav/down'},
   up: {type:'nav/up'},
   top: {type:'nav/top'},
   bottom: {type:'nav/bottom'}
};

export function action() {
   let store = useStore();
   return {
      navDown: () => {
         store.dispatch(types.down);
      },
      navUp: () => {
         store.dispatch(types.up)
      },
      navTop: () => {
         store.dispatch(types.top);
      },
      navBottom: () => {
         store.dispatch(types.bottom);
      },
      navLeft: () => {
         store.dispatch(types.left)
      },
      navRight: () => {
         store.dispatch(types.right)
      }
   }
};

export function init(state) {
   let { row, col } = state.nav;
   let nav = {
      ...state.nav,
      row: row || 1,
      col: col || 1,
      minCol: 1, // for cols
      maxCol: 1,
      minRow: 1, // for rows
      maxRow: state.entries.length
   };
   return { ...state, nav: nav };
}

export function reducer(state, action) {
   let nav = state.nav;
   let { row, col, minRow, minCol, maxCol, maxRow } = nav;
   switch (action.type) {
      case types.left.type:
         col = col - 1; break;
      case types.right.type:
         col = col + 1; break;
      case types.down.type:
         row = row + 1; break;
      case types.up.type:
         row = row - 1; break;
      case types.top.type:
         row = minRow; break;
      case types.bottom.type:
         row = maxRow; break;
   }
   row = (row > maxRow) ? maxRow : row;
   row = (row < minRow) ? minRow : row;
   col = (col > maxCol) ? maxCol : col;
   col = (col < minCol) ? minCol : col;
   state = { ...state, nav: { ...nav, row:row, col:col } };
   return state;
}

