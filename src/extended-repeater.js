const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition === undefined ? '' : options.addition;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  let result = '';
  let String = '';

  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    String = '';

    for (let i = 0; i < additionRepeatTimes; i++) {
      String += addition;

      if (i !== additionRepeatTimes - 1) {
        String += additionSeparator;
      }
    }

    result += String;
    if (i !== repeatTimes - 1) {
      result += separator;
    }
  }
  return result;
};
  