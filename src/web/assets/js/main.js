function addCss(file) {
   var k = document.createElement("link");
   k.setAttribute('href', file);
   k.setAttribute('rel', 'stylesheet');
   document.head.appendChild(k);
}

function setupKeyboard() {

   keyboardJS.withContext("card-nav", () => {
      keyboardJS.bind('j', (ev) => {
         activeNode().classList.toggle("active")
         activeInc();
         var active = activeNode();
         active.classList.toggle("active");
         active.scrollIntoView();
      });

      keyboardJS.bind('k', (ev) => {
         activeNode().classList.toggle("active");
         activeDec();
         var active = activeNode();
         active.classList.toggle("active");
         active.scrollIntoView();
      });

      keyboardJS.bind('p', (ev) => {
         activeNode().classList.toggle("active");
         activeFirst();
         var active = activeNode();
         active.classList.toggle("active");
         active.scrollIntoView();
         scrollTo(0, 0);
      });

      keyboardJS.bind('f', (ev) => {
         activeNode().classList.toggle("active");
         activeLast();
         var active = activeNode();
         active.classList.toggle("active");
         active.scrollIntoView();
      });

      keyboardJS.bind(["l", "h"], (ev) => {
         var active = activeNode();
         var rawRow = active.getAttribute("row");
         var rawCol = active.getAttribute("col");
         var row = parseInt(rawRow);
         var col = parseInt(rawCol);

         var sel = `.card[row="${row}"][col="${col+1}"]`;
         var left = document.querySelector(sel);

         var isClosed = left.classList.contains("closed");
         if (isClosed && ev.key == "l") {
            left.classList.toggle("closed");
            left.classList.toggle("active");
            active.parentNode.classList.toggle("has-selection");
            return
         }
         if (!isClosed && ev.key == "h") {
            left.classList.toggle("closed");
            left.classList.toggle("active");
            active.parentNode.classList.toggle("has-selection");
            return
         }
      });

      keyboardJS.bind("", (ev) => {
         if (ev.key == ":") {
            toggleSearch();
            keyboardJS.setContext('searching-card');
         }
      });
   });

   keyboardJS.withContext("searching-card", () => {
      keyboardJS.bind("esc", (ev) => {
         toggleSearch();
         keyboardJS.setContext('card-nav');
      });

      keyboardJS.bind("", (ev) => {
         var line = document.querySelector(".search .cmd > pre");
         var key = ev.key;
         if (key === "Backspace") {
            var curr = (line.innerText || "");
            var len = curr.length;
            line.innerText = (len > 0) ?
               curr.substring(0, len - 1) :
               curr.substring(0, len);
            return
         }
         if (key === "Enter") {
            line.innerText = line.innerText + "\n"
            return
         }
         if (key == "Shift") {
            return
         }
         if (key == "Meta") {
            return
         }
         if (key == "Escape") {
            line.innerText = ""
            return
         }
         line.innerText = line.innerText + ev.key
      });

   });

   keyboardJS.setContext('card-nav');
};

function toggleSearch() {
   var search = document.querySelector(".search");
   search.classList.toggle("closed");
}

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

function navAttribute(val) {
   return `[nav="${val}"]`
}

function activeNode() {
   return document.querySelector(navAttribute(data.active));
}

document.addEventListener("DOMContentLoaded", function() {
   function next() {
      var active = activeNode();
      active.classList.toggle("active");
      var cards = document.querySelectorAll("[nav]");
      max = cards.length;
      setupKeyboard();
   }
   dataLoad(next);
});
