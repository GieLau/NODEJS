const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const diff = 2.54;

rl.question('Iveskite centimetrus: \n', reiksme => {
    console.log('Centimetrai konvertuoti į colius yra: ' + (reiksme * diff).toFixed(2));
    rl.close();
});