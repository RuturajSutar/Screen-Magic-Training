// let a = (a , b = 10) => {
//     return a+b;
// }
// console.log(a(20));


// let a = (a , b = 10) => {
//     return a+b;
// }
// console.log(a(20 , 30));


// let a = (a = 10 , b) => {
//     return a+b;
// }
// console.log(a(20));
// Not Works


let a = (a = 10 , b) => {
    return a+b;
}
console.log(a(20 , 60));
