const btn = document.getElementById("btn");


function onClickInTag(){
    console.log("Inside OnClick function")
}

btn.addEventListener("click",()=>{
    console.log("Inside add event listener")
})
btn.onclick = ()=>{
    console.log("Inside query selector function")
}