export function style(el, obj) {
   for (var p in obj) {
      var v = obj[p]
      switch (p) {
         case "top":
         case "bottom":
         case "width":
         case "height":
         case "left":
         case "right":
            el.style[p] = v+"px"; 
         default:
            el.style[p] = v
      }

   }
}
