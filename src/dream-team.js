const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let wow = [];
  for (let name of members) {
    if (typeof name === "string") {
      wow.push(name.trim().charAt(0).toUpperCase());
    };
  };
  
  return wow.sort().join('');
};