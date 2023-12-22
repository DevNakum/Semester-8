// async --> It is a keyword to create a asynce function, always return promise
// await --> It is a keyword that is only be used inside a async function

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolve value p1")
    },3000);
});
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolve value p2")
    },6000);
});
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolve value p3")
    },3000);
});
const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolve value p4")
    },9000);
});

const getData = async () => {
    // return `Hello World`;
    return p1;
}

const dataPromise = getData();
// console.log(dataPromise);       // retruns the promise

// dataPromise.then(res=>console.log(res))     // returns the actual value

const handlePromise = async () => {
    console.log("Before Promise handle");
    const val = await p4;
    console.log(val);
    console.log("After Promise handle");
    
    console.log("Before Promise handle2");
    const val2 = await p1;
    console.log(val2);
    console.log("After Promise handle2");
}
handlePromise()
// console.log("outside handle promise");

const getDataWithoutPromise = () => {
    console.log("Before Promise without");
    p3.then((res)=>console.log("without "+res));
    console.log("After Promise without");
    
    console.log("Before Promise without2");
    p1.then((res)=>console.log("without2 "+res));
    console.log("After Promise without2");
}
// getDataWithoutPromise()
console.log("outside without handle promise");
// handlePromise()
// console.log("outside handle promise");