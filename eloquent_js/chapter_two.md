# Chapter Two

## Expressions and Statements 
- A fragment of code that produces a value is called an expression. just like in sentences where there are subsentence fragments, in javascript, a Javascript statement corresponds to as a full sentence. 
Take for example the word 'Food' 'Love' and the Sentense 'I Love Food'.
-- So here an expression can be content to produce a value, 
-- Note that a program is a List of Statements.


## Bindings and Variables

Take the example `let food = 5 + 5;`
- The `let` is a special javascript keyword that indicates that this sentence is going to define a binding.
- 'name` is the identity of the binging word. 
- we use the `=` equal sign to immediately assign a value to it.
- `5 + 5` is the javascript *expression* which the previous statement `let food` creates a binding to get hold of the data produced from the expression.

##### Working with Bindings 

- `const` this keyword defines a constant binding, you can easily use it to reference to names or values you dont want to change
- `let` let allows you define bindings that can be re-used
- `var` var works like let but has some weird properties which causes issues and has been deprecated as of javascript-2015


Lets try some examples 
```js 
// To keep track of the money Andrew has in his wallet, we create a binding 
let AndrewsWallet = 600;

// If Andrew Eventually receives some pocket money of #400 from his mom, we can update the properties of our binding, while still referencing the current value of `AndrewsWallet`
let AndrewsWallet = AndrewsWallet + 400;
// console.log(AndrewsWallet) ==> 1000

```

N/B: A single `let` statement may define multiple bindings, but should be seperated by a comma 
Example `let male = 'bolu', female = 'ada';`


Rules of bindings
Binding names can be any word, and use any digit, but must not start with a `digit`, underscore `_` `₦` symbol.
There are reserved words in javascript, and future versions that cannot be used as binding(variable names)
```
break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let
new package private protected public return static super
switch this throw true try typeof var void while with yield
```

// Functions
- Executing a function is called `invokind, calling or applying it` 
- Values given to functions are called arguments
- console.log() is a function, we can access functions by calling their binding name with a parenthesis, while passing in our 
arguments for the function, one special case in the function `console.log` is that console is a binding, and `log()` is an 
expression that retrieves the log property from the value held by the `console` binding.
- Functions can be used within larger expressions `(Math.max(2,3) + 100)` here `Math.max()` is a part of a larger expression
- Javascript(ES6) has some inbuilt functions that can take the place of regular hacks used when working with other JS 
functions



















