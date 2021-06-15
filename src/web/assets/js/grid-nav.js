function NewGrid(r, c) {
   var maxRows = r;
   var maxCols = c;
   r = 0;
   c = 0;
   return {
      up: function() {
         r--;
         r = (r < 0) ? 0 : r;
      },
      down: function() {
         r++;
         r = (r > maxRows) ? maxRows : r;
      },
      left: function() {
         c--;
         c = (c < 0) ? 0 : c;
      },
      right: function() {
         c++;
         c = (c > maxCols) ? maxCols : c;
      },
      row: function() {
         return r;
      },
      col: function() {
         return c;
      }
   };
}

module.exports.NewGrid = NewGrid;
