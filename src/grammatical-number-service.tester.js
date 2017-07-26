require('babel-register');

const service = require('./grammatical-number-service.js');

console.log("Equals \'One\'   | ", service.toGrammaticalNumber('1') === 'One');
console.log("Equals \'Two\'   | ", service.toGrammaticalNumber('2') === 'Two');
console.log("Equals \'Three\' | ", service.toGrammaticalNumber('3') === 'Three');
console.log("Equals \'Four\'  | ", service.toGrammaticalNumber('4') === 'Four');
console.log("Equals \'Three\' | ", service.toGrammaticalNumber('5') === 'Five');
