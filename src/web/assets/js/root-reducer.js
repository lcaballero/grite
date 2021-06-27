import state from './cms-db.json';
import { createStore } from 'redux';
import { Keyboard } from './kb.js';
import * as GridNav from './grid-nav.js';
import * as Mode from './mode.js';

function initialState() {
   return GridNav.init(state);
}

function rootReducer(state, action) {
   if (!state) {
      state = initialState();
   }
   state = Mode.reducer(state, action);
   state = GridNav.reducer(state, action);
   return state;
}

const store = createStore(rootReducer, initialState());

export { store, rootReducer };
