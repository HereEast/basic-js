const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 function getDNSStats(domains) {
  if(!domains.length) return {};
  let dns = {};

  let domArr = domains.map(domain => domain.split(".").reverse());
  
  domArr.forEach(domain => {
    domain[0] = "." + domain[0];

    for(let i = 0; i < domain.length; i++) {
      let part = domain.slice(0, i + 1).join(".");
      if(!dns[part]) dns[part] = 1;
      else dns[part] += 1;
    }
  })

  return dns;
}

module.exports = {
  getDNSStats
};
