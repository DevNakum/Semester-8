console.log("hello");

let dogImageDiv = document.getElementById("dogImage");

const getNewDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(json =>{
        console.log(json)
        dogImageDiv.innerHTML = `<img src='${json.message}' height=300px width=300px>`
    })
}