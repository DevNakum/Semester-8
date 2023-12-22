let billInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeopleDiv = document.getElementById("numberOfPeople");
let perPersonTotalDiv = document.getElementById("perPersonTotal");

// get number of people from number of people form div
let numberOfPeople = Number(numberOfPeopleDiv.innerHTML);

// calcuate the toal bill per person

const calcuateBill = () => {
    const bill = Number(billInput.value);

    const tipPercentage = Number(tipInput.value)/100;
    
    const tipAmount = bill*tipPercentage;

    let totalBill = bill + tipAmount;

    const perPersonTotal = totalBill/numberOfPeople;
    perPersonTotalDiv.innerHTML = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    document.getElementById("minus").disabled = false;
    document.getElementById("minus").style.backgroundColor = "white";
    numberOfPeople++;
    numberOfPeopleDiv.innerHTML = `${numberOfPeople}`

    calcuateBill();
}

const decreasePeople = () => {

    if(numberOfPeople<=1){
        document.getElementById("minus").disabled = true;
        document.getElementById("minus").style.backgroundColor = "grey";
        return;
    }
    else{
        document.getElementById("minus").disabled = false;
        document.getElementById("minus").style.backgroundColor = "white";
        numberOfPeople--;    
        numberOfPeopleDiv.innerHTML = `${numberOfPeople}` 
    }
    
    calcuateBill();
}
