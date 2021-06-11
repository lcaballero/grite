function dataLoad() {
   axios.get("/cms-db.json")
      .then(function(resp) {
         var cmsDB = resp.data;
         console.log(data);
         var win = document.querySelector(".window.layout");
         var html = [];
         var cards = cmsDB.entries.map((e, i) => [
            '<section class="frame card" nav="'+(i+1)+'">',
            e.html,
            '</section>'
         ].join("\n"));

         win.innerHTML = cards.join("\n");
      })
      .catch(function(err) {
         console.log(err);
      })
      .then(function() {
         //console.log('always')
      });
}
