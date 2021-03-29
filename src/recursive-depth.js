const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) {
      return 1;
    }
    let depth = 1;
    
    arr.forEach(element => {
      if(Array.isArray(element)) {
    const depthLevel = this.calculateDepth(element) + 1;

        if(depth < depthLevel) {depth = depthLevel;}
      }
  });
    
    return depth;
}
};