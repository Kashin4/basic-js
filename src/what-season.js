const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if(!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw Error
  
  let  month = date.getMonth();
 
  let season ='';

  switch (month) {
    case 0:
    case 1:
    case 11:
    season = 'winter';
    break;

    case 2:
    case 3:
    case 4:
    season = 'spring'  ;
    break;

    case 5:
    case 6:
    case 7:
    season = 'summer';
    break;

    case 8:
    case 9:
    case 10:
    season = 'autumn';
    break; 
  }
    return season;
};
