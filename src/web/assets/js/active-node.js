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
