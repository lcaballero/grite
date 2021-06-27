import { useStore } from 'react-redux';

const edit = 'card-edit';
const walk = 'walk';
const enter_edit_mode = 'enter-edit-mode';
const enter_walk_mode = 'enter-walk-mode';

export function isEdit(name) {
   return name == edit;
}

export function reducer(state, action) {
   switch (action.type) {
      case enter_edit_mode:
         return {
            ...state,
            session: {
               ...state.session,
               mode:{ name:edit, show:true }
            }
         };
      case enter_walk_mode:
         return {
            ...state,
            session: {
               ...state.session,
               mode: { name:walk, show:true }
            }
         };
      default:
         return state;
   }
}

export function actions() {
   let store = useStore();
   return {
      enterWalk: () => {
         store.dispatch({type:enter_walk_mode})
      },
      enterEdit: () => {
         store.dispatch({type:enter_edit_mode})
      },
      dumpState: () => {
         console.log(store.getState())
      }
   };
}
