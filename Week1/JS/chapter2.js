// Use REPL with node
typeof 'hello' //string -primitive
typeof true //boolean -primitive
typeof 1 //number -primitive
typeof [1,2] //object
typeof {key:'value'} //object
typeof x //undefined -primitive

let score1 = 0 //mutable
score1 = 5
score1; //5

const a = 1; a; //1 global
{ const a = 3; a; } //3 local new assignment (two different /a/ variables)
a; //1 global

let b7 = 2; //global
{ b7 = 4; b7; } //4 local reassignment
b7; //4

const c = 1; c; //1 global
{ c = 3; c; } // ERROR -  reassignment of const invalid
c; //1 global

{ d = 3; d; } // global from block [without let or const]
d; // 3 accessible because it is global
d = 5; d; //5 mutable

{let e=7; const h=8;} //local scope
e; h;// unaccessible

// Direct assignment - primitive values
const a2 = 1;
let b4 = a2; // a = 1, b = 1
b4 = 2; // a = 1, b = 2

// Reference - non-primitive values assignment
const k = { value: 1 };
let t = k; // k.value = 1, t.value = 1
t.value = 2; // k.value = 2, t.value = 2

k = {value: 2};


/* Practice in Class Week 2 Day 2 */
// 1. non-primitive data types can mutate
const chatBot = {value: 'Alexa'}
chatBot.value = 'Bot' //mutable -  the value referenced by variable inside the object can change
console.log(chatBot)
//2. Immutable
const botName = 'Siri' 
botName = 'alexa' // TypeError: Assignment to constant variable.


//3. Length
botName.length

//4. Upper Case
botName.toUpperCase()

//5. Create array with chatbot names Alexa, Siri
botNames = ['Alexa','Siri']

//6. Add Maya
botNames[2] = 'Maya'

//7. Index of S in botname
botName.indexOf('S')

//8. Index of Z in botname
botName.indexOf('Z')

//9. Include S or Z
botName.includes('S')
botName.includes('Z')

//10. starts with s
botName.toLowerCase().startsWith('s')

// 11.
let firstName='Olga'
let lastName='Scrivner'
firstName+' '+lastName
`${firstName} ${lastName}`

//12. clean text
let text = '\t this is a input         \n'

//13 compound operator
let score = 0
score+=10
score-=5
score*=3

//14. convert string to number
Number('25')

//15. convert number to string
String(25)
25..toString()

// Challenge
let person = 'Ernold'
person[0] = 'A' 
console.log(person) // output: Ernold
//  the value we’re trying to mutate is a string, which is a primitive value — and all primitive values are immutable (unchangeable).

let peopleList = ['Arnold', 'Linda', 'Sylvester', 'Dolph']

console.log(peopleList[0]) // output: "Arnold"

// In JavaScript, primitive values are read-only, 
// whereas non-primitive values (objects/arrays, functions) are both read & write.

// global versus local



{a1 = 3; a1;} // create a global assignment from block
a1 // value is accessible outside the block
a1 = 4; //4 value is overwritten

a2 = 3 // global scope outside the block
{a2 = 4; a2;} //value is accessible inside the block
a2; //4 - value is overwritten


{let b1 = 3; b1;} // create a local mutable assignment only
b1;  // b1 is not defined globally
b1=4; // no errors but we aare creating a global assignment here, noyt changing value from local scope

let b2 = 2; // create a global mutable assignment
{ b2 = 4; b2; } // global b2 is accessible in inside block. It is mutable.
b2; //4 - value is overwritten from block


let b3 = 2; // create a global mutable assignment
{ let b3 = 4; b3; } // creating a local assignment
b3; //2 - local scope did not overwrite the global

const c1 = 3; // create a global immutable assignment
{const c1=2;c1;} // create a local immutable
c1; // local scope did not overwrite global assignment


const c2 = 3; // create a global immutable assignment
{c2=2;c2;} // typeerror (cannot change)
let test = {c2}; // accessible
test.c2; //3
test={c2:2}; //2 - you can change value in object (it is not a primitive)
test.c2; //2 - accessing value in object
c2; //3 - the global value is not changed


const c3 = 1;
c4 = c3; c4 = 2; // 2 - c4 only refers to c3
c3; //1 - the value is not overwritten

let c5 = c3; c5 = 2; // c5 only refers to c3
c3 // 1 - the value is not changed

const z = { value: 1 };
z.value;
let c6 = z; // c6.value = 1, z.value = 1
c6.value = 2; // c6.value = 2, z.value = 2
z.value; //value is mutable (it is not a primitive data type, it is object)
typeof(z)
//https://techstacker.com/what-does-it-mean-that-primitive-values-are-immutuable-in-javascript/