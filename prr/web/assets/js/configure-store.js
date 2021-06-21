import state from './cms-db.json';
import { createStore } from 'redux';

function initialState() {
   return state;
}

function rootReducer(change, action) {
   if (!change) {
      change = initialState();
   }
   console.log('rootReducer');
   console.log('change', change);
   console.log('action', action);
   switch (action.type) {
      case "change-mode":
         return { ...change, mode:action.payload }
   }
   return change;
}

const store = createStore(rootReducer, initialState());

export { store, rootReducer };
