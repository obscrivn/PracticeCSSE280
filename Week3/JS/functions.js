// Named functions
function hello() {
    console.log('Hello world');
}
// function expression (no name)
const goodbye = function() {
    console.log('Goodbye');
};
//function expression (name)
const goodbye2 = function bye() { // buy is a local name
    console.log('Goodbye');
};

// invoke
goodbye()

// return (undefined if no return)
function howdy(){
    return 'Howdy World!';
    }


// variable ARGUMENTS

// Print Array with Variable Num of Elements:
function list(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}

//Find Mean of Variable Num of Elements:
function mean(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
        }
    return total/values.length;
    }

// Define a cube function with default value 5
function cube(x=5){
    return x*x*x;
}

function input(...args) {
    return args.length;
 }
 
 function sorted(...args) {
    const sortedArgs = args.sort();
    return sortedArgs;
 }

 //default params
 function names(name = 'Unknown') {
    return `hello ${name}`;
 }

 function discount(price, value=10) {
    return price*(100-value)/100;
 }

 function discount2(value=10,price) {
    return price*(100-value)/100;
 }

 // Arrow functions
 hello = function() {
    return 'Hello';
 };

 hello = () => {
    return 'Hello';
}

hello = () => 'Hello';

// hoisting and callback (see functions.html)

// sorting array

['a','f','d','c'].sort()
[1,2,5,4,3].sort()
[1,3,12,5,23,18,7].sort()

function numbers(a,b) {
return a-b
}

[1,3,12,5,23,18,7].sort(numbers)

/// Array Itirators with Callback
//1. forEach
const colors = ['red','blue','green'];
for (let i=0,max = colors.length; i<max; i++){
   console.log(`${colors[i]} at ${i}`);
}

colors.forEach((color,index)=>{console.log(`${color} ${index}`);})

//map()
function square(x) {
    return x*x;
}
[1,2,5].map(square) // function declaraation
[1,2,5].map((x) => x*x)

['red','blue','green'].map(color => `<p>${color.toUpperCase()}</p>`)


// reduce()

[1,2,3,4,5].reduce( (acc,val) => {
    console.log(acc)
    console.log(val)
    console.log(acc + val)
    console.log('done')
    //console.log(prev)
    return acc + val 
}
    )

// filter()
const number = [1,4,6,7]
number.filter(x => x%2===0)
number.filter(x => x%2!=0)

// Chaining together


