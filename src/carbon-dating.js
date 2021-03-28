const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity || sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || typeof sampleActivity !== 'string') {
    return false;
  }

  if (/[^[0-9.,]/.test(sampleActivity)) {
    return false;
  }

  let k = 0.693/HALF_LIFE_PERIOD;
  let time = (Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity)))/k;
  return Math.ceil(time);
};
