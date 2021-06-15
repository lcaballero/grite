var { NewGrid } = require("../../../web/assets/js/grid-nav.js");

test('nav up at zero should have row of min', () => {
   var ng = NewGrid(3,3)
   ng.down(); expect(ng.row()).toBe(1);
   ng.up(); expect(ng.row()).toBe(0);
   ng.up(); expect(ng.row()).toBe(0);
})

test('nav down > max should have row of max', () => {
   var ng = NewGrid(3,3)
   ng.down(); ng.down(); ng.down(); ng.down(); ng.down();
   expect(ng.row()).toBe(3);
})

test('nav down+right should increment row and col respectively', () => {
   var ng = NewGrid(3,3)
   ng.down();
   ng.right();
   expect(ng.row()).toBe(1);
   expect(ng.col()).toBe(1);
})

test('default grid has default row,col starting values', () => {
   var ng = NewGrid(1,1)
   expect(ng.row()).toBe(0);
   expect(ng.col()).toBe(0);
})
