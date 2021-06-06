var prev = "";

function addCss(file) {
   var k = document.createElement("link");
   k.setAttribute('href', file);
   k.setAttribute('rel', 'stylesheet');
   document.head.appendChild(k);
}

function getTimestamp() {
   axios.get("/updated.txt")
      .then(function(resp) {
         var date = resp.data.date
         if (prev == "") {
            prev = date
            return
         }
         if (prev === date) {
            return
         }
         var file = resp.data.files[0];
         if (file === '/index.html') {
            location.reload();
         }
         var isCss = v.endsWith(file, ".css")
         if (isCss) {
            var href = "link[href='"+file+"']";
            var els = document.querySelector(href);
            console.log(els);
            els.remove();
            addCss(file);
         }
         prev = resp.data.date;
      })
      .catch(function(err) {
         console.log(err);
      })
      .then(function() {
         //console.log('always')
      })
}

setInterval(getTimestamp, 1000)

keyboardJS.bind('h', (ev) => {
   console.log("show help")
   var help = document.querySelector('.help');
   console.log(help)
   help.classList.toggle("closed");
})
