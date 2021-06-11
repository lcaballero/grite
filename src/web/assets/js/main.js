
//setInterval(getTimestamp, 1000);



function addCss(file) {
   var k = document.createElement("link");
   k.setAttribute('href', file);
   k.setAttribute('rel', 'stylesheet');
   document.head.appendChild(k);
}

function setupKeyboard() {
   keyboardJS.bind('h', (ev) => {
      var help = document.querySelector('.help');
      help.classList.toggle("closed");
   });

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
   });

   keyboardJS.bind('f', (ev) => {
      activeNode().classList.toggle("active");
      activeLast();
      var active = activeNode();
      active.classList.toggle("active");
      active.scrollIntoView();
   });
};

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
   console.log("running dataLoad()", data);
   dataLoad();
   setTimeout(function() {
      var active = activeNode();
      active.classList.toggle("active");
      var cards = document.querySelectorAll("[nav]");
      max = cards.length;
   }, 1)
   setupKeyboard();
});
