// Chapter 3 Arrays
const myArray = [];
const myArray2 = new Array(); // constructor declaration
typeof(myArray); // object

const heroes = [];
heroes[0]='Batman'
heroes[1]='Flash'
heroes[2]='spider'

const mixedArray = [null, true, 1, [], 't']

const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk'];
delete avengers[0]; // 
avengers.length // 4 - the element deleted but the position remained 

//let [x,y] = [1,2]
//[x,y] = [y,x];
avengers[avengers.length-1]; //last element

// DESTRUCTIVE: POP, SHIFT, UNSHIFT, PUSH, SPLICE
// remove last element POP
avengers.pop(); //return the removed item, avengers is changed

// remove the first element SHIFT
avengers.shift(); // return  the removed item, avengers is  changed


// add new value at the end PUSH
avengers.push('Black Widow'); // return the new length


// add new value at the beginning UNSHIFT
avengers.unshift('Captain America'); // return the new length

// remove item, can also replace
avengers.splice(0,1,'Rock'); // index to remove; number of elements to remove, item to insert (if no replace, just skip)
//= return the removed item, avengers is changed
avengers.splice(1,0,'Loki'); // // can also insert without removing, return will be empty array

avengers.reverse() /// change is permanent
avengers.sort() // change is permanent



// merge
avengers.concat(heroes);
// join
avengers.join(" ");
// slicing (begin index and exculsive end index)

// Non Distructive
avengers.slice(1,3); //iron man, thor = 
// return sliced copy, avengers is not changed

// Indexing
avengers.indexOf('Loki') // if -1 = the item is not found
avengers.includes('Loki'); // true or false

// Multidimensional Array
const coordinates = [[1,3],[4,2]];

// Nested Arrays
let summer = ['June','July','August'];
let winter = ['Jan','Feb','Mar']
let nested = [summer, winter]
let flat = [...summer,...winter] // - not nested

// // //  SET - collection of Unique items
//length for Array, size() for Set

const list = new Set()

// add values
list.add(1).add(2).add(3)

const numbers = new Set([1,2,3])
const jla = new Set().add('Superman').add('Batman').add('Wonder Woman');
// Methods
//size()
//has()
jla.has('Superman') // true - false
// Note - No index Notation - cannot use numbers[0]

// delete() return true/false
jla.delete('Superman')
// clear() remove all values

// Convert to Array
const shoppingSet = new Set().add('Apple').add('Orange').add('Plum')
const shoppingArray = [...shoppingSet]

// Logic

const age = 30;
//console.log(`${age}`);
if (age > 18) {
    console.log('sorry');
}

// even numbers
const n = 20;
if (n%2===0) {
    console.log("Even")
}
else {
    console.log("not even")
}
// Ternary Operator

const x = 5;
x%2===0 ? console.log('even') : console.log('odd');

const number = 5;
switch (number) {
    case 4:
    console.log('You rolled a four');
    break;
    case 5:
    console.log('You rolled a five');
    break;
    case 6:
    console.log('You rolled a six');
    break;
    default:
    console.log('You rolled a number less than four');
    break;
    }

    // While loops

    let bottles = 10;
    while (bottles > 0) {
        console.log(`${bottles}`);
        bottles--;
    }

    // Do While
// The only difference is that the condition comes after the block of code:
// This means that the block of code will always be run at least once, regardless of the condition being true or not.
//let bottles = 10;
do {
console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
bottles--;
} while (bottles > 0)


// For Loop
for (let bottles = 10; bottles > 0; bottles--){
    console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
}


for(let i=1 ; i<13 ; i++){
    for(let j=1 ; j<13 ; j++){
        console.log(`${j} multiplied by ${i} is ${i*j}`);
        }
    }

    for(const value of avengers){
        console.log(value);
        }    



//MAPS
//a list of key and value pairs, and are similar to 'hashes', or 'hash tables' or 'dictionaries' in other programming languages.
const romanNumerals = new Map();
romanNumerals.set(1,'I');
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V');


romanNumerals.get(4); // return values
romanNumerals.has(5); // for checking keys - boolean

const heroes2 = new Map([ ['Clark Kent','Superman'],
['Bruce Wayne', 'Batman']
])
heroes2.size;
// delete()
//clear()
// Note: array -> name.length; set -> name.size(); maps -> name.size
// flatten
[...romanNumerals];


const users = [
    ['user1','abc'],
    ['user2','123']
    ]
const logUser = prompt('username');
if (logUser.exists(users)) {
    console.log(`${logUser}`);
}   