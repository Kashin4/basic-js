const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt() {
    if (!message || !key) throw new Error("One or both param is/are UNDEFINED");
  }    
  decrypt() {
    throw new CustomError('Not implemented');
    if (!message || !key) throw new Error("One or both param is/are UNDEFINED");
  }
}

module.exports = VigenereCipheringMachine;
