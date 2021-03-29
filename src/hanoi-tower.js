const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
  let turns = Math.pow(2, disksNumber) - 1;

  let hours = turns / turnsSpeed;
  let seconds = Math.floor(hours * 3600);

  obj.turns = turns;
  obj.seconds = seconds;

  return obj;
};
