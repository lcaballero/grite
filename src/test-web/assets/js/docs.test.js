var PouchDB = require("../../../web/assets/js/lib/pouchdb-7.2.1.js");
var memory = require("../../../web/assets/js/lib/memdown.js");

test('creating a db', () => {
   console.log(PouchDB);
   var db = new PouchDB("first", {db:memory});
   expect(db == null).toBe(false);
})

