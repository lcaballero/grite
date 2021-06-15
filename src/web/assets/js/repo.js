function NewRepo() {
   var data = {};
   var obs = {};
   var noop = function() {};

   function broadcast(name, curr, val) {
      var listeners = obs[name] || [];
      listeners.forEach((fn) => {
         fn(name, curr, val)
      });
   }

   function valueFn(name, val) {
      return {
         val:function() {
            return val;
         },
         to: function(to) {
            broadcast(name, val, to);
            val = to;
         },
      }
   }

   var repo = {
      obs: function(name, val, fn) {
         data[name] = valueFn(name, val);
         obs[name] = (!!fn) ? [fn] : [noop];
         return repo;
      },
      val: function(name) {
         return data[name].val()
      },
      to: function(name, val) {
         var vals = data[name];
         vals.to(val)
         return repo;
      },
      has: function(name) {
         return !!obs[name];
      },
   };

   return repo;
}

module.exports.NewRepo = NewRepo;
