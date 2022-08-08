const { NotImplementedError } = require("../extensions/index.js");

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
    let arrWithDivider = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) arrWithDivider.push(str[i]);
        else arrWithDivider.push(str[i], "-");
    }

    let arr = arrWithDivider.join("").split("-").slice(0, -1);
    let map = arr.map(el => `${el.length}${el[0]}`);
    let string = map.join("");

    return string.replace(/1/gi, "");
}

module.exports = {
    encodeLine
};
