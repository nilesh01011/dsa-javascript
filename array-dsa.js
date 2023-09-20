// # Flatten the Array

let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12],
    [13],
];

// console.log(arr.flat(2))

// custom flat
function customFlat(arr, depth = 1) {
    let result = [];
    arr.forEach(ar => {
        if (Array.isArray(ar) && depth > 0) {
            result.push(...customFlat(ar, depth - 1))
        } else {
            result.push(ar);
        }
    });

    return result;
}

// console.log(customFlat(arr))

// let, const and var
//  var is global scopes and var is a functions scopes
// let and const is block scopes

// Explain Call, Apply and Bind

var person = {
    name:'Coders',
    hello:function(thing){
        console.log(this.name + ' says hello ' + thing);
    }
}

var alterEgo = {
    name:"Nilesh"
}

person.hello('world')

// call takes objects and take a arguments as this alterEgo
person.hello.call(alterEgo,'world')

// apply
person.hello.apply(alterEgo,['world']) // output: Nilesh says hello world

// bind takes a context and return completely new functions to this context
const newHello = person.hello.bind(alterEgo)
newHello('world')

// composition polifill

function addFive(a){
    return a + 5;
}

function subtractTwo(a){
    return a - 5;
}

function muiltiplyFour(a){
    return a * 4;
}

const compose = (...functions)=>{
    return (args) => {
        return functions.reduceRight((arg,fn) => fn(arg),args)
    }
}

const evaluate = compose(addFive,subtractTwo,muiltiplyFour);

console.log(evaluate(5)) // 23
