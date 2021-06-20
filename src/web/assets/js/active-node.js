function ActiveNode(repo, db) {
   var max = db.entries.length;
   var grid = NewGrid(max, 2);

   function navAttribute(val) {
      return `[nav="${val}"]`
   }

   function activeNode() {
      return document.querySelector(
         navAttribute(grid.row()));
   }

   return {};
}

module.exports.ActiveNode = ActiveNode;

/*

function activeFirst() {
   data.active = 1;
}

function activeLast() {
   data.active = max;
}

function activeInc() {
   data.active++;
   data.active = (data.active > max) ? max : data.active;
   data.active = (data.active < 1) ? 1 : data.active;
}

function activeDec() {
   data.active--;
   data.active = (data.active > max) ? max : data.active;
   data.active = (data.active < 1) ? 1 : data.active;
}

*/
