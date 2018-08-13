// Getting DOM elements

let checkbtn = document.getElementById('checkbtn');
let cancelbtn = document.getElementById('cancelbtn');

//Arithmetrics
const cubeIt=(num)=> num**3;
const numIt = (str)=> parseInt(str);
const addIt =(total, curr)=> total + curr;

//Error display
const errorHandler=()=>{
    display.innerHTML = `<div class="result"><h2> Invalid input</h2> <h2>length</h2></div>`
}

//To test if a number isArmstrong
const isArmstrong=(e)=>{
    
    let input = document.getElementById('input').value;
    let display = document.getElementById('display');
    let inputSplit = input.split("")
    let theMath = inputSplit.map(numIt).map(cubeIt).reduce(addIt);
    
 
    if(input.length == 3 && theMath == input){
        checkbtn.style.backgroundColor = "green" 
        display.innerHTML = `<div class="result"><h2>TRUE</h2><h2> ${input} is Armstrong</h2></div>`
        checkbtn.removeEventListener('mouseover', errorHandler)
    }
    else if(input.length >= 4){
        checkbtn.disabled = true
        checkbtn.style.backgroundColor = "#dddddd"
        checkbtn.addEventListener('mouseover', errorHandler)
        document.getElementById('checkbtn').removeAttribute('disabled');
    }
    else{
        checkbtn.style.backgroundColor = "green"
        display.innerHTML = `<div class="result"><h2>False</h2></div>`
        checkbtn.removeEventListener('mouseover', errorHandler)

    }
    e.preventDefault();
}

//Clearing data
const toClear=()=>{
    let input = document.getElementById('input').value;
    let display = document.getElementById('display');
    let form = document.getElementById('form')
    checkbtn.removeEventListener('mouseover', errorHandler)
    document.getElementById('checkbtn').removeAttribute('disabled');
    checkbtn.style.backgroundColor = "green"
    form.reset();
    display.innerHTML =``;
}

//Button elment
checkbtn.addEventListener('click', isArmstrong);
cancelbtn.addEventListener('click', toClear);
    