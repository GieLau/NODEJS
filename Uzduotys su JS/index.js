//exercise 1*******
const vardas = 'Keanu'
const pavarde = 'Reeves'
const nickname = vardas.slice(-3) + pavarde.slice(-3);
document.getElementById('exercise1').innerHTML = nickname;

//exercise 2 ******
const city = "An American in Paris";
const beBalsiu = /[a, e, i]/gi;
console.log(city.replace(beBalsiu, " "));

const big = "Breakfas at Tiffany's";
const bigHide = /[a,e,i,y,o,u]/gi;
consloe.log(big.replace(bigHide, " "));

const space = "2001: A Space Odyssey";
const spaceBeBalsiu = /[a,e,o,y]/gi;
console.log(space.replace(spaceBeBalsiu, " "));

const life = "It's a Wonderful Life";
const lifeBeBalsiu = /[i,a,o,e,u]/gi;
console.log(life.replace(lifeBeBalsiu, " "));

//exercise 3 *******
const a = "*";
for (let index = 0; index < a.length; ++index) {
    const element = a[400];
    console.log(element);
}

// const a = ["a", "b", "c"];
// const it = a.values(); // Or `const it = a[Symbol.iterator]();` if you like
// let entry;
// while (!(entry = it.next()).done) {
//     const element = entry.value;
//     console.log(element);
// }