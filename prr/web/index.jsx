import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useStore } from 'react-redux';

import { store, rootReducer } from './assets/js/configure-store.js';
import { App } from './assets/js/app.jsx';
import { Keyboard } from './assets/js/kb.js';

function render() {
   ReactDOM.render(
      <Provider store={store}>
         <Keyboard/>
         <App/>
      </Provider>,
      document.getElementById("app")
   );
}

store.subscribe(render);
store.dispatch({type: "@@redux/INIT"});

window.store = store;
