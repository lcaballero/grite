import { dataLoad } from './data-load';

function setupKeyboard(repo, db) {
   ModeStatus(repo);
   ActiveNode(repo, db);

   function navDown() {
      activeNode().classList.toggle("active")
      activeInc();
      var active = activeNode();
      active.classList.toggle("active");
      active.scrollIntoView();
   }

   function navUp() {
      activeNode().classList.toggle("active");
      activeDec();
      var active = activeNode();
      active.classList.toggle("active");
      active.scrollIntoView();
   }

   function navTop() {
      activeNode().classList.toggle("active");
      activeFirst();
      var active = activeNode();
      active.classList.toggle("active");
      active.scrollIntoView();
      scrollTo(0, 0);
   }

   function navBottom() {
      activeNode().classList.toggle("active");
      activeLast();
      var active = activeNode();
      active.classList.toggle("active");
      active.scrollIntoView();
   }

   function navLeftAndRight() {
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
   }
   var navLeft = navLeftAndRight;
   var navRight = navLeftAndRight;
   function startSearch(ev) {
      if (ev.key == ":") {
         toggleSearch();
         keyboardJS.setContext('searching-card');
      }
   }

   keyboardJS.withContext("card-nav", () => {
      keyboardJS.bind('j', navDown);
      keyboardJS.bind('k', navUp);
      keyboardJS.bind('p', navTop);
      keyboardJS.bind('f', navBottom);
      keyboardJS.bind("l", navLeft);
      keyboardJS.bind("h", navRight);
      keyboardJS.bind("", startSearch);
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

function next(db) {
   //var active = activeNode();
   //active.classList.toggle("active");

   max = db.length;
   var repo = NewRepo();
   setupKeyboard(repo, db);
}


dataLoad(next);
