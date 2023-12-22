// let title = document.getElementById("title");
// console.log(title.innerHTML);

// title.innerHTML = "okk"; 
// console.log(title.innerHTML);

// title.style.color = "red";
// title.style.display = "inline-block";
// title.style.backgroundColor = "black"


const squares = document.querySelectorAll(".common");
const timeClicked = {'red':0, 'green':0, 'yellow':0};
squares.forEach(square => {
    console.log(square.value);
    square.onclick = () => {
        timeClicked[square.value]++;
        // console.log(square.value);
        square.innerHTML = timeClicked[square.value] 
    }
}) 

function clearScores(){         
    squares.forEach(square => {
        timeClicked[square.value] = 0;
        square.innerHTML='';
    })
}

const clearBtn = document.getElementById("clear-game");
clearBtn.onclick = () => clearScores();

