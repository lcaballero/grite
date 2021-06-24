import state from './cms-db.json';
import { createStore } from 'redux';
import { Keyboard } from './kb.js';
import * as GridNav from './grid-nav.js';

function initialState() {
   return GridNav.init(state);
}

function rootReducer(change, action) {
   if (!change) {
      change = initialState();
   }
   switch (action.type) {
      case "enter-edit-mode":
         return { ...change, mode:{name:"edit",show:true} };
      case "enter-walk-mode":
         return { ...change, mode:{name:"walk",show:true} };
      default:
         return GridNav.reducer(change, action);
   }
   return change;
}

const store = createStore(rootReducer, initialState());

export { store, rootReducer };
