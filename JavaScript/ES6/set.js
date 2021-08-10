let mySet = new Set();

mySet.add("Ruturaj");
mySet.add("Tony");
mySet.add(152);
mySet.add(NaN);
mySet.add("Ruturaj");
mySet.add("Tony");

console.log(mySet.size);

for(let element of mySet){
    console.log(element);
}

console.log(mySet.has("Tony"));
console.log(mySet.has("152"));
console.log(mySet.has(NaN));
console.log(mySet.has("Peter"));

let newSet = new Set([10,20,"Tis"]);
for(let ele of newSet){
    console.log(ele);
}