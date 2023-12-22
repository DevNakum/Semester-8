let data = [
    {fname:"Karan",lname:"Aggrewal"},
    {fname:"Yash",lname:"Ramani"},
]

// function - display the data into body
const getData = () => {
    setTimeout(() => {
        let result = "";
        data.forEach((it,idx)=>{
            result += `<li>${it.fname} ${it.lname}</li>`
        })

        document.body.innerHTML = result;
    }, 1000);
}


// function - add data into main data object use callback
const createData = (newData,cb) => {
    setTimeout(() => {
        data.push(newData);
        cb();
    }, 2000);
}

createData({fname:"Mayan",lname:"Patel"},getData);



let data2 = [
    {fname:"Karan",lname:"Aggrewal"},
    {fname:"Yash",lname:"Ramani"},
]

// function - display the data into body
const getData2 = () => {
    setTimeout(() => {
        let result = "";
        data.forEach((it,idx)=>{
            result += `<li>${it.fname} ${it.lname}</li>`
        })

        document.body.innerHTML = result;
    }, 500);
}


// function - add data into main data object use promise
const createData2 = (newData) => {
    return new Promise(((resolve,reject)=>{
        setTimeout(() => {
            data.push(newData);

            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Something went wrong!!");
            }
        }, 1000);

    }))    
}

createData2({fname:"Mayan",lname:"Patel"})
    .then(getData)
    .catch((err)=>{
        console.log(err);
    });


// async - await
let data3 = [
    {fname:"Karan",lname:"Aggrewal"},
    {fname:"Yash",lname:"Ramani"},
]

// function - display the data into body
const getData3 = () => {
    setTimeout(() => {
        let result = "";
        data.forEach((it,idx)=>{
            result += `<li>${it.fname} ${it.lname}</li>`
        })

        document.body.innerHTML = result;
    }, 500);
}


// function - add data into main data object use promise
const createData3 = (newData) => {
    return new Promise(((resolve,reject)=>{
        setTimeout(() => {
            data.push(newData);

            let error = false;
            if(!error){
                resolve();
            }
            else{
                reject("Something went wrong!!");
            }
        }, 1000);

    }))    
}

const start = async () => {
    await createData3({fname:"Mayan",lname:"Patel"});
    getData();
}
start();