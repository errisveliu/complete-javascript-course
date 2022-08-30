"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive :D")

const interface = 'Audio';
const private = 534;

function logger() {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
return juice;
}

const appleJuice = fruitProcessor(20, 10);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const age1 = calcAge1(1991);


function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}

console.log(age1);



const age2 = calcAge2(1991);
console.log(age1, age2);

// Function Expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
    }

// Arrow Functions
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirment = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1980, 'Bob'));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

const yearsUntilRetirment = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log (`${firstName} is already retired.`);
        return -1;
    }
}

console.log(yearsUntilRetirment(1991, 'Jonas'));
console.log(yearsUntilRetirment(1970, 'Mike'));

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3,4,5));

// Test 1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win🏆  with (${avgDolphins} vs. ${avgKoalas}).`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win🏆  with (${avgKoalas} vs. ${avgDolphins}).`);
    } else {
        console.log(`No team wins...😔.`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576,111)

// Test 2
scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);

