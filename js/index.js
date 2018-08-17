// Getting DOM elements
let input = document.getElementById('input')
let checkbtn = document.getElementById('checkbtn');
let cancelbtn = document.getElementById('cancelbtn');

// To number from default increment or decrement
input.onkeydown = function(e) {
    if((e.keyCode >= 38 && e.keyCode <= 40)) {
        return false;
    }
}

// number.onkeydown = function(e) {
//     if(!((e.keyCode > 95 && e.keyCode < 106)
//       || (e.keyCode > 47 && e.keyCode < 58) 
//       || e.keyCode == 8)) {
//         return false;
//     }
// }

//Arithmetrics
const cubeIt=(num)=> num**3;
const numIt = (str)=> parseInt(str);
const addIt =(total, curr)=> total + curr;

//Error display
const errorHandler=()=>{
    checkbtn.disabled = true
    display.innerHTML = `<div class="result"><h2> Invalid input</h2> <h2>length</h2></div>`
}
//To remove default error
const errorRemover=()=>{
    document.getElementById('checkbtn').removeAttribute('disabled');
    checkbtn.removeEventListener('mouseover', errorHandler)
    display.innerHTML = ``
}
// Check input length and justify
const checkInput =()=>{
    let input = document.getElementById('input')
    if(input.value.length <=2){
        display.innerHTML = `<div class="result"><h4> Number must be</h4> <h4>three digit</h4></div>`
    }
    else if(input.value.length == 3){
        errorRemover();
        checkbtn.addEventListener('click', isArmstrong);
        checkbtn.style.backgroundColor = "green" 
        
        
    }
    else if(input.value.length >=4){
        checkbtn.addEventListener('mouseover', errorHandler)
        checkbtn.style.backgroundColor = "#dddddd"
        document.getElementById('checkbtn').removeAttribute('disabled');
        
    }
    
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
    