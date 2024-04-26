//variaveis
const btnReset = document.querySelector("#btnReset");
const btnTry = document.querySelector("#btnTry");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let randoNumber = Math.round(Math.random() * 10);
let Attempts = 1;

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", catchEnterInReset);

//Funções
function handleTryClick(event) {
  event.preventDefault(); // não realizar o padrão do evento

  const inputNumber = document.querySelector("#inputNumber").value;

  const checkNumberIsPositivoAndLesser10 = inputNumber >= 0 && inputNumber < 10;
  const checkInputIsEmpty = inputNumber !== "";

  if (!checkInputIsEmpty || !checkNumberIsPositivoAndLesser10) {
    alert("Insira um número válido");
  } else {
    if (inputNumber.value == randoNumber) {
      toggleScreen();

      screen2.querySelector("h2").innerText = `Você acertou em ${Attempts}`;
    }
    inputNumber.value = "";
    Attempts++;
  }
}
function handleResetClick() {
  toggleScreen();
  Attempts = 1;
  randoNumber = Math.round(Math.random() * 10);
}
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
function catchEnterInReset(event) {
  const enter = event.key;
  const checkScreen1 = screen1.classList.contains("hide");
  if (enter == "Enter" && checkScreen1) {
    handleResetClick();
  }
}
