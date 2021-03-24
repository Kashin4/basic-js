const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let i = 0;
  matrix.map((event) => {
      event.forEach(elem => {
        if (elem === '^^') {
          i++;
        }
      });
    })
    return i;
};
