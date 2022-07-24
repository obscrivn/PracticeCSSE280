// Use REPL with node
typeof 'hello' //string -primitive
typeof true //boolean -primitive
typeof 1 //number -primitive
typeof [1,2] //object
typeof {key:'value'} //object
typeof x //undefined -primitive

let score = 0 //mutable
score = 5

/* Practice in Class Day 4 */
// 1. non-primitive data types can mutate
const chatBot = {value: 'Alexa'}
chatBot.value = 'Bot' //mutable

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

let b = 2;

{ b = 4; b; }

{c = 3, c;}

const c = 1;
b = c; b = 2

const z = { value: 1 };
let d = z; // c.value = 1, d.value = 1
d.value = 2; // c.value = 2, d.value = 2
https://techstacker.com/what-does-it-mean-that-primitive-values-are-immutuable-in-javascript/