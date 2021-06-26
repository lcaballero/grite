import state from './cms-db.json';
import { createStore } from 'redux';
import { Keyboard } from './kb.js';
import * as GridNav from './grid-nav.js';

function initialState() {
   return GridNav.init(state);
}

function rootReducer(state, action) {
   if (!state) {
      state = initialState();
   }
   switch (action.type) {
      case "enter-edit-mode":
         return { ...state, mode:{name:"edit",show:true} };
      case "enter-walk-mode":
         return { ...state, mode:{name:"walk",show:true} };
      default:
         return GridNav.reducer(state, action);
   }
   return state;
}

const store = createStore(rootReducer, initialState());

export { store, rootReducer };
