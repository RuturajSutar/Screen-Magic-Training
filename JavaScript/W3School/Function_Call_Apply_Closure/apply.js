//Apply is method using which we can write methods which can be used on different objects
//Apply is Similer to call but the only difference is :
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// const myObj = {
//     calling : function(){
//         return "My name is "+this.name+" and I am "+this.age+" years old";
//     }
// };
// const one = {
//     name : "Ruturaj Sutar",
//     age : 21
// };
// const two = {
//     name : "Tony Stark",
//     age : 55
// };
// console.log(myObj.calling.apply(one));
// console.log(myObj.calling.applytwo);



const myObj = {
    calling : function(first , second){
        return "My name is "+this.name+" and I am "+this.age+" years old. "+first+" "+second;
    }
};
const one = {
    name : "Ruturaj Sutar",
    age : 21
};
console.log(myObj.calling.apply(one , ["And I am" , "Iron Man"]));