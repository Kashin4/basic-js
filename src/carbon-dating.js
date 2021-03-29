const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
      if (typeof sampleActivity != "string")
      return false
    let sampleActiv = parseFloat(sampleActivity);
    if (!sampleActiv || 0 > sampleActiv || sampleActiv > 15)
      return (false);
    let t = 0.693 / HALF_LIFE_PERIOD;
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / t);
  };

