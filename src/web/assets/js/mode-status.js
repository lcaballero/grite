function ModeStatus(repo) {
   var mode = document.querySelector(".mode");
   var status = document.querySelector(".mode .status");
   repo.obs("show-mode", true, (key, curr, val) => {
      if (val) {
         mode.classList.remove("closed");
      } else {
         mode.classList.add("closed");
      }
   })
   repo.obs("mode", "edit", (key, curr, val) => {
      status.innerText = val;
   });
}

module.exports.ModeStatus = ModeStatus
