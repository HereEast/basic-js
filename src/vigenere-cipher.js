const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

// ABCDEFGHIJK LMNOPQRSTU VWXYZ
// ATTACK AT DAWN!
// ALPHON SE ALPHONSE
// A > 0 > 0 = 0 = A
// T > 19 > 11 = 19 + 11 = 30 % 26 = 4 = E
// T > 19 > 15 = 19 + 15 = 34 % 26 = 8 = I
// A > 0 > 7 = 7 = H
// C > 2 > 14 = 16 = Q
// K > 10 > 13 = 23 = X
//
// A > 0 > 18 = 18 = S

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = this.getFullKey(message, key);

    let code = [];

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        code.push(message[i]);
        continue;
      }

      let letterIdx = this.alphabet.indexOf(message[i]);
      let shift = this.alphabet.indexOf(key[i]);
      let pos = letterIdx + shift;

      if (pos >= this.alphabet.length) pos -= this.alphabet.length;
      code.push(this.alphabet[pos]);
    }

    if (this.direct) return code.join("");
    return code.reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");

    message = message.toUpperCase();
    key = this.getFullKey(message, key);

    let code = [];

    for (let i = 0; i < message.length; i++) {
      if (!this.alphabet.includes(message[i])) {
        code.push(message[i]);
        continue;
      }

      let letterIdx = this.alphabet.indexOf(message[i]);
      let shift = this.alphabet.indexOf(key[i]);
      let pos = letterIdx - shift;

      if (pos < 0) pos += this.alphabet.length;
      code.push(this.alphabet[pos]);
    }

    if (this.direct) return code.join("");
    return code.reverse().join("");
  }

  getFullKey(message, key) {
    let fullKey = "";
    let k = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        fullKey += key[k];

        if (k === key.length - 1) k = 0;
        else k += 1;
      } else {
        fullKey += message[i];
      }
    }
    return fullKey.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine,
};
