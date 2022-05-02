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
  if(!(Array.isArray(arr))) throw Error(`'arr' parameter must be an instance of the Array!`);
  if(arr.length === 0) return [];
  
  let copy = arr.slice();
  // let newArr = [];

  let simpleArr = copy.every(el => typeof el === "number");
  if(simpleArr) return copy;

  if(copy[0] === "--discard-prev" || copy[0] === "--double-prev") {
    copy.splice(0, 1);
  }

  if(copy[copy.length - 1] === "--discard-next" || copy[copy.length - 1] === "--double-next") {
    copy.pop();
  }

  for(let i = 0; i < copy.length; i++) {
    if(copy[i] === "--discard-next") {
      let nextIdx = i + 1;
      copy.splice(nextIdx, 1);
      copy.splice(i, 1);
    }

    if (copy[i] === "--double-prev") {
      let prev = copy[i - 1];
      copy.splice(i - 1, 0, prev);
      copy.splice(i + 1, 1);
    }

    if (copy[i] === "--double-next") {
      let next = copy[i + 1];
      copy.splice(i + 1, 0, next);
      copy.splice(i, 1);
    }

    if (copy[i] === "--discard-prev") {
      let prevIdx = i - 1;
      copy.splice(prevIdx, 1);
      copy.splice(i, 1);
    }

  }

  return copy;
}

module.exports = {
  transform
};
