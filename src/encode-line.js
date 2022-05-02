const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if(!str || str.length === 0) return "";
  let line = "";

  for(let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) line += str[i];
    else line += `${str[i]}-`;
  }

  if(line[line.length - 1] === "-") line = line.slice(0, -1);

  let arr = line.split("-");
  // let code = arr.map(el => el = `${el.length}${el[0]}`).join("");

  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > 1) newArr.push(`${arr[i].length}${arr[i][0]}`);
    else newArr.push(arr[i]);
  }

  return newArr.join("");
}

module.exports = {
  encodeLine
};
