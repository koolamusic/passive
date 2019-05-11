

const Person = function (firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person('Andrew', 'Mead', 27)
console.log(me)

const person2 = new Person('Clancey', 'Turner', 51)
console.log(person2)


/// Primitives in Javascript 
// Aside from null, undefined and NaN, every other js primitive is a subset of Objects.prototype in javascript

// Object ---> Object.prototype ---> null
// Array ---> Array.prototype ---> Object.prototype ---> null
// String ---> String.prototype ---> Object.prototype ---> null
// Number ---> Number.prototype ---> Object.prototype ---> null


// Using classes in ES6

class PersonClass {

}

const micro = new PersonClass()


console.log(micro)


