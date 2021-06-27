import * as GridNav from '../../../web/assets/js/grid-nav.js';

test('dispatch up at min row', () => {
   let state = GridNav.init({ nav: {row:1}, entries: [1,2,3,4] })
   state = GridNav.reducer(state, GridNav.types.up);
   let { row } = state.nav;
   expect(row).toBe(1);
})

test('dispatch down at max row', () => {
   let state = GridNav.init({ nav: {row:4}, entries: [1,2,3,4] })
   state = GridNav.reducer(state, GridNav.types.down);
   let { row } = state.nav;
   expect(row).toBe(4);
})

test('dispatch up decrement row', () => {
   let state = GridNav.init({ nav: {row:3}, entries: [1,2,3,4] })
   state = GridNav.reducer(state, GridNav.types.up);
   let { row } = state.nav;
   expect(row).toBe(2);
})

test('dispatch down increments row', () => {
   let init = GridNav.init({ nav: {}, entries: [1,2,3,4] })
   let state = GridNav.reducer(init, GridNav.types.down);
   let { row } = state.nav;
   expect(row).toBe(2);
})

test('init should add mins and maxes', () => {
   let basis = { nav: {}, entries: [1,2,3,4] }
   let state = GridNav.init(basis);
   let { minCol, maxCol, minRow, maxRow } = state.nav;
   expect(minCol).toBe(1);
   expect(maxCol).toBe(1);
   expect(minRow).toBe(1);
   expect(maxRow).toBe(basis.entries.length);
})

test('init maintains state entries and nav properties', () => {
   let basis = { nav: {}, entries: [1,2] }
   let state = GridNav.init(basis)
   expect(state).not.toBe(null);
   expect(state.nav).not.toBe(null);
   expect(state.entries).not.toBe(null);
})
