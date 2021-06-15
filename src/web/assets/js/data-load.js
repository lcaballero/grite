function dataLoad(next) {
   axios.get("/cms-db.json")
      .then(function(resp) {
         var db = resp.data;
         window.db = db;
         var win = document.querySelector(".window.layout");
         var col = 1;
         var cards = db.entries.map((e, i) => {
            var tagList = (e.tags || []).join(", ") || "";
            var tags = (!!tagList) ?
               `<aside class="tags">${tagList}</aside>` :
               "";
            var card = [
            `<section class="frame card" nav="${i+1}" row="${i+1}" col="${col}">`,
            e.html,
            tags,
            `<aside class="coords">row="${i+1}" col="${col}"</aside>`,
            '</section>'
            ].join("\n")
            return card
         });

         var col1 = [
            `<div class="col" col="${col}">`,
            cards.join("\n"),
            '</div>',
         ];

         var col = 2;
         var c = db.entries.map((e,i) => [
            `<section class="frame card closed" row="${i+1}" col="${col}">`,
            `<aside class="coords">row="${i+1}" col="${col}"</aside>`,
            '</section>'
         ].join("&nbsp;"));
         var col2 = [
            '<div class="col">',
            c.join("\n"),
            '</div>'
         ];

         win.innerHTML = [
            col1.join("\n"),
            col2.join("\n")
         ].join("\n")

      })
      .catch(function(err) {
         console.log(err);
      })
      .then(function() {
         next()
      });
}
