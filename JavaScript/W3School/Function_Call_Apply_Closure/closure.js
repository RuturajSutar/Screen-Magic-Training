// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// A closure is a function having access to the parent scope, even after the parent function has closed.

const myfunc = () => {
    let counter = 0;
    const newFunc = () => {
        return one = () => {
            counter++;
            return counter;
        }
    }
    return newFunc();
}

var a = myfunc();

console.log(a());
console.log(a());
console.log(a());
console.log(a());