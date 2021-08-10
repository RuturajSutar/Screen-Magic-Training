//Spread attribute (...) is used to convert array into list and list into array

// let sumElements = (array) => {
//     console.log(array);
//     let sum = 0;
//     for(let number of array){
//         sum += number;
//     }
//     console.log(sum);
// }
// sumElements(10,20,30,40);
// Gives Error because for loop cannot iterate the list. So we have to convert list into array.


// let sumElements = (array) => {
//     console.log(array);
//     let sum = 0;
//     for(let number of array){
//         sum += number;
//     }
//     console.log(sum);
// }
// sumElements([10,20,30,40]);
// Works fine cause for loop can iterate through array
// Here sum is stored in local


// let sumElements = (...array) => {
//     console.log(array);
//     let sum = 0;
//     for(let number of array){
//         sum += number;
//     }
//     console.log(sum);
// }
// sumElements(10,20,30,40);
// Works fine
// Here sum is stored in block


//Math.max() function accepts list and not array

// let array = [10,20,30];
// console.log(Math.max(array)); 
// not works

let array = [10,20,30];
console.log(Math.max(...array));
// Works 