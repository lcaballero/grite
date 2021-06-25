import { useStore } from 'react-redux';

export function actions() {
   let store = useStore();
   return {
      enterWalk: () => {
         store.dispatch({type:"enter-walk-mode"})
      },
      enterEdit: () => {
         store.dispatch({type:"enter-edit-mode"})
      },
      dumpState: () => {
         console.log(store.getState())
      }
   };
}
