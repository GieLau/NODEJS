const path = require('path');

//console.log(__filename);

//Failo pavadinimas
console.log( path.basename(__filename) );

//Direktorijos kelias
console.log( path.dirname(__filename) );

//Failo tipas
console.log( path.extname(__filename) );

//Failo informacijos objektas
console.log( path.parse(__filename) );

//Prie failo kelio pridedamas aplanko ir failo pavadinimas
console.log( path.join( __dirname, 'test', 'test.html' ));