export function geom(el) {
   if (!el) {
      return {};
   }
   el = el.current || el;
   var rect = el.getBoundingClientRect();
   var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
   var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
   return {
      // relative to the view window without any scroll
      view: {
         top: rect.top,
         bottom: rect.bottom,
         left: rect.left,
         right: rect.right,
         height: rect.height,
         width: rect.width,
         x: rect.x,
         y: rect.y
      },
      // relative to the window
      win: {
         top: rect.top + scrollTop,
         left: rect.left + scrollLeft
      }
   }
}
