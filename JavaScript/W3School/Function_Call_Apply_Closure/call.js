//call is method using which you can write methods/functions that can be used on different objects

// const myObj = {
//     name : "Ruturaj Sutar",
//     age : 21,
//     calling : function(){
//         return "My name is "+this.name+" and I am "+this.age+" years old";
//     }
// }
// console.log(myObj.calling());

// const myObj = {
//     calling : function(){
//         return "My name is "+this.name+" and I am "+this.age+" years old";
//     }
// };

// const one = {
//     name : "Ruturaj Sutar",
//     age : 21,
// };

// const two = {
//     name : "Tony Stark",
//     age : 55,
// };

// console.log(myObj.calling.call(one));

// console.log(myObj.calling.call(two));


const myObj = {
    calling : function(first , second){
        return "My name is "+this.name+" and I am "+this.age+" years old. " + first + " "+second;
    }
};

const one = {
    name : "Ruturaj Sutar",
    age : 21,
};

console.log(myObj.calling.call(one , "And I" , "Iron Man."));
