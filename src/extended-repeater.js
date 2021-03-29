const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(typeof str != 'string') {
    str = String(str);
  }
}
  