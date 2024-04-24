const randoNumber = Math.round(Math.random() * 10)
let Attempts = 1
console.log(randoNumber)
function handleClick(event) {
    event.preventDefault()

    let inputNumber = document.querySelector("#inputNumber")
    // let result = inputNumber.value == randoNumber

    

    if(inputNumber.value == randoNumber){
        document.querySelector('.screen1').classList.add('hide')
        document.querySelector('.screen2').classList.remove('hide')

        document
        .querySelector('.screen2 h2')
        .innerText = `Você acertou em ${Attempts}`
    }
    Attempts++
    console.log(Attempts)
}