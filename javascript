JavaScript Q&A

1- What is JS?
Well JS is high level interpreted single threaded syncronous language, that allow us to manipulate the DOM.

2. what are the data types in js? what are premitive datatypes?
Data types are a way to define/defferenciate the type of provided data.
premitive data type are the core general data types of a language i.e- integer, string, boolean, null, undefine, symbols and then there are non-premitive datatypes, these datatypes are build on top of premitive data types and contain the premitive datatypes such as objects etc.

3. what is the differenc b/w premitive and non-premitive datatypes?
well as i said the fundamental diff b/w these two datatypes are basically is that premitive datatypes are core language datatypes and non-premitive datatypes are build containing the premitive datatypes. premitive datatypes can hold only single value but non premitives like objects, arrays can hold a collection of many values.

4. what are arrays, functions and objects?
arrays are one of the famous data structures available in JS. Arrays are set of contigous homogenous data.
functions as the name suggest itself are a way to give instruction to the code to give the output/do a task. there are 3 types of function notations, function declaration, function expression, arraow functions, anonymous functions and iife (imediate invoked function expressions)
objects are set of data in key value pair.

5.what is scope in js?
well scope is a define area for a particular function/ data in the hirearcy of the file till where they can access which values.

6. what is the diffrence b/w let, var, const?
var declared variables are usually global scoped, let declared variables are block scoped and const declared variables are also block scoped but immutable like we can't modify the value of a const variable.

7. what is loop and what type of loops are there?
loops as the name suggest work in looping the given task/command with provided threshold/condition for them to stop looping. there are 3 type of loops.. for loop, while loop, do while loops.

8. whats the difference b/w for of and for in.
well for of targets on the indexes and for in targets on values of the indexes.

9. what is forEach method? compare it with for of and for in methods?
forEach works in a callback function and in each loop returns the element of the array and in that callback we can modify/use the each value.

10. what is the difference between == and ===?
well the main difference b/w == and === is of loose/strict eqaulity check.
both of them first check the datatype and then check the values but == just ignore the datatype incase its string/number and consider the value.
-need to watch sanket singh video.

11. what is function expression and arrow functions in js?
function expression is a way to declare a function and assign it to a variable and hold its value/final outcome in it.
arrow function were come into the picture with es6 realease. I'm fotgetting it's core benifit of "this" keyword bindind.
-need to watch it.

12. what is the use of event handling?
handle an event means simply handling a function that will execute after external interaction with it and js can handle and these events, stop it or modify it on a go to get the desired output. events are bone of browsers to dominate the dom to get the changes done.

13. what are higher order functions?
which funcitons accept other functions as arguments or return functions as outcome are higher order functions.

14. what are asyncronous operations in javascript?
asyncronous operations in js were possible with the help of nodejs runtime and browsers provided api. asyncrous operations are a way to execute the commands/do the work to the long process task can happen without block the main thread meanwhile.

15. what are promises in js?
promises are a way to write asyncronous calls. promises offers a promise instantly for a asyncronous declared task which can in future either gets resolved or rejected.

16. how to implement a promise?
const asyncTask= new Promise(asyncronous function/task)
also promises whether they gets rejected or resolved always returns another promise.

17. what is the use of promises in real applications?
well promises are widely in use. whenever we need to do an asyncronous task without blocking the main thread from running the followed command/tasks we use promises.

18. what are classes and objects?

19. what is the purpose of "this" in js?

20. what is hoisting in JS?

21. what is scope chaining?

22. what is TDZ?

23. what types of scopes are there in JS?

24. what is call, apply and bind in js?

25. what is polyfill and currying in js
