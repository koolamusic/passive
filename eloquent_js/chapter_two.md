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



















