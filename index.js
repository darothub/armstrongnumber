

let checkbtn = document.getElementById('checkbtn');
let cancelbtn = document.getElementById('cancelbtn');

const cubeIt=(num)=> num**3;
const numIt = (str)=> parseInt(str);
const addIt =(total, curr)=> total + curr;

const isArmstrong=(e)=>{
    
    let input = document.getElementById('input').value;
    let display = document.getElementById('display');
    let inputSplit = input.split("")
    
    let theMath = inputSplit.map(numIt).map(cubeIt).reduce(addIt);
    if(input.length >= 4){
        const disabledIt=()=>{
            document.getElementById('checkbtn').setAttribute('disabled', 'disabled');
            display.innerHTML = `<div class="result"><h2> Invalid input</h2> <h2>length</h2></div>`
            return false
        }
        checkbtn.addEventListener('click', disabledIt);
    }
    else if(input.length == 3 && theMath == input){
        display.innerHTML = `<div class="result"><h2>TRUE</h2><h2> ${input} is Armstrong</h2></div>`
    }else{
        display.innerHTML = `<div class="result"><h2>False</h2></div>`

    }
    e.preventDefault();
}

const toClear=()=>{
    let input = document.getElementById('input').value;
    let display = document.getElementById('display');
    let form = document.getElementById('form')
    form.reset();
    display.innerHTML =``;
}


checkbtn.addEventListener('click', isArmstrong);
cancelbtn.addEventListener('click', toClear);
    