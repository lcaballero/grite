function zero() {
   return {
      top: 0, bottom: 0,
      left: 0, right: 0,
      width: 0, height: 0,
      x: 0, y: 0
   }
}

export function geom(el) {
   if (!el) {
      return { view: zero() };
   }
   if (typeof(el) == "function") {
      el = el();
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
