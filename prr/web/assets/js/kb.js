import React from 'react';
import { useStore } from 'react-redux';
import keyboardJS from './lib/keyboard.min.js';
import * as GridNav from './grid-nav.js';
import * as Mode from './mode.js';

const locals = {};

function InitKeyboard() {
   if (locals.hasStarted) {
      return
   }
   var {
      navDown, navUp,
      navTop, navBottom,
      navLeft, navRight,
      startSearch
   } = GridNav.action();
   var { enterWalk, enterEdit } = Mode.actions()
   keyboardJS.withContext("card-nav", () => {
      keyboardJS.bind('j', navDown);
      keyboardJS.bind('k', navUp);
      keyboardJS.bind('p', navTop);
      keyboardJS.bind('f', navBottom);
      keyboardJS.bind('l', navLeft);
      keyboardJS.bind('h', navRight);
      keyboardJS.bind(['e', 'space', 'tab'], (ev) => {
         console.log("kb e", ev);
         ev.preventDefault()
         keyboardJS.setContext('edit-mode')
         enterEdit()
      })
   });
   keyboardJS.withContext("edit-mode", () => {
      keyboardJS.bind(['w', 'space', 'tab'], (ev) => {
         console.log("kb w", ev)
         ev.preventDefault()
         keyboardJS.setContext('card-nav')
         enterWalk()
      })
   })
   keyboardJS.setContext('card-nav');
   locals.hasStarted = true;
}

export function Keyboard() {
   InitKeyboard()
   return <div className="init-keyboard-component"></div>
}
