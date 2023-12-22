// console.log("Dev")
// let name = "Dev"

// console.log(name)

// take input from user
// let fruit = prompt("What is your favourite food?")
// console.log(fruit)

// let weather;
// if(weather=='rain'){
//     console.log("Greb your umbrella ☔");
// }
// else{
//     console.log("Wear your sunglasses 😎");
// }

// let x = 1;
// if(8>x){
//     console.log("if")
// }
// else{
//     console.log("false")
// }




// function greeting(name){
//     greet = "Hii "+ name + ", nice to meet you!!"
//     interpolate =  `Hii ${name}, nice to meet you!!`
//     console.log(interpolate)
// }

// greeting("Dev")


// // regular functions
// function myFunction(name){
//     console.log(`Hii ${name}`)
// }

// // arrow functions
// const myFunction2 = (name)=>{
//     console.log(`Hii ${name}`)
// }

// const numArray = [1,2,3,4,5,6];     
// console.log(numArray.slice(2,5))    // [ firstIndex,lastIndex ) 


// const personName = {
//     fname:"Dev",
//     lname:"Nakum"
// }

// console.log(personName.fname)   //dot notaion
// console.log(personName['fname'])    //bracket notaion


// const introducer = (name,shirt)=>{
//     const person = {
//         name : name,
//         shirt : shirt,
//         assets : 10000,
//         liabilities : 5000,
//         networth : function(){
//             return this.assets - this.liabilities; 
//         }
//     }

//     const intro =  `Hii, My name is ${person.name} and color of my shirt is ${person.shirt} and networth is ${person.networth()}$`;

//     return intro
// }

// console.log(introducer('Dev', "Black"))





// loops

let num = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element)
// }

// forof loop --> it gives iterator
// for (const itr of num) {
//     console.log(itr)
// }

// forin loop  --> it gives idx
// const str = 'Hello from other world';
// for (const key in str) {
//     console.log(key)
// }


// count the freqency
// const countFrequency = (str) => {
//     let freq = [];

//     for (const ele of str) {
//         // if element is present increase the frequeny
//         // else set to the value 1
//         if(ele in freq){
//             freq[ele]++;
//         }
//         else{
//             freq[ele]=1;
//         }
//     }
//     return freq;
// }

// str = 'Hello from other world';
// console.log(countFrequency(str));


// num.forEach(ele => {
//     console.log(ele)
// });

// let result = num.map(number=>number*2)

// let filterResult = num.filter(number=>number>2)
// console.log(filterResult)

// const actors = [
//     {name:'abc',age:63},
//     {name:'adg',age: 12},
//     {name:'sfjie',age:33},
//     {name:'lje',age:56},
// ]

// let result = actors.filter(actor=>actor.age > 20)
// console.log(result)

// document.getElementById("name").innerHTML = `${result[0].name}`;

// const result = num.reduce((prev,next)=>prev*next);
// console.log(result)

// let w1 = document.getElementById("name").innerHTML
// console.log(w1)

function example() {
    const x = 10;
    if (true) {
      let x = 20;
      console.log("inside "+x);
    }
    console.log("outside "+x);
  }

example()