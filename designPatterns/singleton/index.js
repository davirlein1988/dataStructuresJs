// implement singleton pattern
//
let Singleton = (function () {
  function Single(options) {
    options = options || {};
    this.name = "Singleton";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 3;
  }

  let instance;
  let _static = {
    name: "Singleton",
    getInstance: function (options) {
      if (instance === undefined) {
        instance = new Single(options);
      }
      return instance;
    },
  };
  return _static;
})();

const testInstance = Singleton.getInstance({ pointX: 3.45, pointY: 4.322 });
console.log(testInstance.pointX);
