// class MyClass{
//     constructor(name){
//         this.name = name;
//     }
//     getName(){
//         return this.name;
//     }
//     setName(name){
//         this.name = name;
//     }
// }

// let myC = new MyClass("Tony Stark");
// console.log(myC.getName())
// myC.setName("Ruturaj Sutar");
// console.log(myC.getName());



// class MyClass{
//     constructor(name){
//         this.myname = name;
//     }
//     getName(){
//         return this.myname;
//     }
//     setName(name){
//         this.myname = name;
//     }
// }

// let myC = new MyClass("Tony Stark");
// console.log(myC.getName())
// myC.setName("Ruturaj Sutar");
// console.log(myC.getName());


class MyClass{
    constructor(name){
        this.name = name;
    }

    get Name(){
        return this.name;
    }

    set Name(name){
        this.name = name;
    }
}

let myObj = new MyClass("Rutu");
console.log(myObj.Name);
myObj.Name = "Tony";
console.log(myObj.Name)