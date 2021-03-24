const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let times = turnsSpeed / 3600;
  let turns = Math.pow(2,disksNumber)-1;
  let second = turns / times;
  let seconds = Math.floor(second)
  return {turns:turns, seconds:seconds}
};
