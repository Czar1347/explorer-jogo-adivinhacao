const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randoNumber = Math.round(Math.random() * 10)
let Attempts = 1
console.log(randoNumber)


function handleTryClick(event) {
    
    event.preventDefault() // não realizar o padrão do evento
    

    const inputNumber = document.querySelector("#inputNumber")
    
    if(inputNumber.value == randoNumber){
        screen1
        .classList
        .add('hide');

        screen2
        .classList
        .remove('hide');
        
        screen2
        .querySelector('h2')
        .innerText = `Você acertou em ${Attempts}`;
    }
    inputNumber.value = ''
    Attempts++
}


//Eventos

const btnReset= document.querySelector('#btnReset')
const btnTry = document.querySelector('#btnTry')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    Attempts = 1
    randoNumber = Math.round(Math.random() * 10)
    console.log(randoNumber)
})