//The JavaScript this keyword refers to the object it belongs to.

const myObj = {
    name : "Ruturaj",
    age : 21,
    myFunc : function(){
        console.log(this.name + "---" + this.age);
    }
}

myObj.myFunc();


// Alone, this refers to the global object.
// In a function, this refers to the global object.
// When used alone, the owner is the Global object, so this refers to the Global object.
// In a browser window the Global object is [object Window]

// let a = 10;
// let myFunc = () => {
//     let a = 50;
//     console.log(a);
// }

// let a = 10;
// let myFunc = () => {
//     let a = 50;
//     console.log(this.a);
// }

// var a = 10;
// let myFunc = () => {
//     let a = 50;
//     console.log(a);
// }

var a = 10;
let myFunc = () => {
    let a = 50;
    console.log(this.a);
}

myFunc();