const diff = 2.54;

console.log('cm.\tcol.\t|\tcol.\tcm.');

for(let x = 1; x<= 10; x++) {
    console.log(x + '\t' + (x*diff).toFixed(2) + '\t|\t' + x + '\t' + (x/diff).toFixed(2));
}