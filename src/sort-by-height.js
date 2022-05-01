const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if(arr.every(el => el === -1)) return arr;

  let indexes = [];
  let newArr = [];

  arr.forEach((el, index) => {
    if(el === -1) indexes.push(index);
  })

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== -1) newArr.push(arr[i]);
  }

  newArr = newArr.sort((a, b) => a - b);

  for(let i = 0; i < indexes.length; i++) {
    newArr.splice(indexes[i], 0, -1);
  }

  return newArr;
}

module.exports = {
  sortByHeight
};
