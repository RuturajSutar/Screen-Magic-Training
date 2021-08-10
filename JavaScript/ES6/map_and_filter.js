let myarray = [1,2,3,4,5];

myarray.map(n => n**2);
console.log("myarray :",myarray);
// for(let item of one){
//     console.log(item);
// }
// console.log([...one])

let two = myarray.filter(n => n > 1);
for(let element of two){
    console.log(element);
}