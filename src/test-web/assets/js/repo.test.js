var { NewRepo } = require("../../../web/assets/js/repo.js");

test('observe change "mode" to "write"', () => {
   var nr = NewRepo();
   var actual = {};
   nr.obs("mode", "edit",
      (name, curr, val) => {
         actual.name = name;
         actual.curr = curr;
         actual.val = val;
      })
   nr.to("mode", "write");
   expect(actual.name).toBe("mode")
   expect(actual.curr).toBe("edit")
   expect(actual.val).toBe("write")
})

test('push change of "mode" to "write"', () => {
   var nr = NewRepo();
   expect(nr.obs("mode", "edit").val("mode")).toBe("edit")
   expect(nr.to("mode", "write").val("mode")).toBe("write")
})

test('adding "mode" with "edit" value', () => {
   var nr = NewRepo();
   nr.obs("mode", "edit");
   expect(nr.val("mode")).toBe("edit")
})

test('adding "key" for "mode" is stored', () => {
   var nr = NewRepo()
   expect(nr.has("mode")).toBe(false)
   expect(nr.obs("mode", "edit").has("mode")).toBe(true)
})

test('empty repo should not be watching for a "key"', () => {
   expect(NewRepo().has("mode")).toBe(false)
})
