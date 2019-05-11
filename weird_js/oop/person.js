const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Andrew', 'Mead', 27)
console.log(me)

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2)

console.log(new String)


/// Primitives in Javascript 
// Aside from null, undefined and NaN, every other js primitive is a subset of Objects.prototype in javascript

// Object ---> Object.prototype ---> null
// Array ---> Array.prototype ---> Object.prototype ---> null
// String ---> String.prototype ---> Object.prototype ---> null
// Number ---> Number.prototype ---> Object.prototype ---> null