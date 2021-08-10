let myMap = new Map();
myMap.set("Name" , "Ruturaj");
myMap.set("Age" , 21);
myMap.set("Hobbies" , ["Chess" , "BGMI" , 21 , "Sketching"]);
myMap.set(50 , "Fifty");
myMap.set(NaN , "Empty");
myMap.set("Name" , "Tony Stark");

console.log(myMap.get("Name"));
console.log(myMap.get("Age"));
console.log(myMap.get("Hobbies")[0]);
console.log(myMap.get("Hobbies")[2]);
console.log(myMap.get(50));
console.log(myMap.get(NaN));
console.log(myMap.size);

console.log(myMap.keys());
console.log(myMap.values());

for(let key of myMap.keys()){
    console.log(key);
}

for(let value of myMap.values()){
    console.log(value);
}

for(let element of myMap){
    console.log(element);
}

for(let [key , value] of myMap){
    console.log(key + " == " + value);
}



