const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const commands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];
  const result = [];
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  } else {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] === commands[0]) {
        if (i !== arr.length-1) {i += 1;};
      } else if (arr[i] === commands[1]) {
        if (i !== 0 && arr[i-2] !== commands[0]) {result.pop();};
      } else if (arr[i] === commands[2]) {
        if (i !== arr.length-1) {result.push(arr[i+1]);};
      } else if (arr[i] === commands[3]) {
        if (i !== 0 && arr[i-2] !== commands[0]) {result.push(arr[i-1]);};
      } else {
        result.push(arr[i]);
      }
    };
    return result;
  };
};

module.exports = {
  transform
};
