const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr))throw new Error;
  let transform = [];
  for(let i=0; i<arr.length; i++) {
    switch(arr[i]) {
      case "--discard-next":
        if(arr[i+1] != undefined) i++;
        break;
      case "--discard-prev":
        if(arr[i-2] != "--discard-next") {
          if(arr[i-1] != undefined) transform.pop();
        }
        break;
      case "--double-next":
        if(arr[i+1] != undefined) {
          transform.push(arr[i+1]);
        }
        break;
      case "--double-prev":
        if(arr[i-2] != "--discard-next") {
          if(arr[i-1] != undefined) transform.push(arr[i-1]);
        }
        break;
      default:
        transform.push(arr[i]);
        break;
    }
  }
  return transform;
};
