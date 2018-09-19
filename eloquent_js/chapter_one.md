Values in javascript, are created and stored somewhere, while invoked, the bits generated from invoking this value is recycled as building material for the next generation of values to be invoked.


### Numbers
Javascript uses a fixed number system of 64bits.. represented as 2^64 18 quintillion (an 18 with 18 zeros after it)

Numbers in javascript can be represented in scientific notation like 2.98e10, here 2.98^10 is raised ^ to the power 10
In javascript it is smart to treat fractional digital numbers as approximations and not precise values. 

-- There are 3 Special Number Types [Infinity, -Infinity, and NaN]. Inifinity based computations are not mathematically sound, and can lead you to a NaN quickly, all operations against and Infinity returns `Infinity`. These special numbers are still recognized in javascript as numbers.


### Strings
Can be represented in quotes, backticks, double or single quotes as long as the quotes at the start and end of the string match.
Strings in javascript are also modeled in bits, based on the `Unicode` standard, this assigns a number to virtually every character you would ever need, (Greek, Arabic, Japanese, Armenian and so on). 
- However Javascript's representation uses **16bits** per string element, which can describe 2^16 different characters.
- Template Literals when used computed the values in a ${} Literal and returns a string in the position is it used `half of 100 is ${100 / 2}`

### Operators 
Operators that use one value are unary operators like typeof(), `!` The **not operator denoted by the exclamation**
Operators that use two values are binary operators like `-`, `+` `<`, `>` // Plus, minus, greater than and less than signs 
The Tenary Operator is only one of such that takes three values in javascript E.g `console.log(true ? 1 : 2);` 
In the example above the way the Tenary behaves when it is true, it chooses or executes the middle value, and when it is false, it chooses the value on the right.

Javascript is funny in the way it deals with operators, take for example the results below

console.log("Itchy" > "cratchy")
VM2685:1 false

console.log("Itchy" < "cratchy")
VM2691:1 true

console.log("Itchy" > "Sratchy")
VM2698:1 false

console.log("Ttchy" > "Sratchy")


N/B : There is only one value in Javascript that isn't equal to itself and that is NaN
is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations **Eloquent Javascript**




### Short Circuiting logical operators 
In javascript, there exist methods that can be used to short circuit logical operators, We can use this functionality as a way to fall back on a default value. example `||` checks for false from the left and outputs the right `&&` checks for true from the left and outputs the right, the Tenary `? :` checks for true at the left and outputs the next. Evaluate the output below

(undefined || "user")
"user"

(undefined && "user")
undefined


(NaN && "user")
NaN

(NaN ||  "user")
"user"

(NaN ? 2 : 1)
1

(undefined ? 2 : 1)
1

(null ? 2 : 1)
1

(true ? 2 : 1)
2

(4 ? 2 : 1)
2

(4 == 4 ? 2 : 1)
2

(4 !== 4 ? 2 : 1)
1




