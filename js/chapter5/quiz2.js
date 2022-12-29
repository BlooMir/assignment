const calc = document.querySelector("#calc");
const res = document.querySelector(`#result`);
let max;

calc.onclick = () => {
  let firstNum = document.querySelector(`#number1`).value;
  let secondNum = document.querySelector(`#number2`).value;

  let smaller = firstNum<secondNum ? firstNum : secondNum;
  let bigger = firstNum>secondNum ? firstNum : secondNum;

  for(i=0; i <= smaller; i++){
    if(smaller % i === 0){
      if(bigger % i === 0){
        max = i;
      }
    }
  }
  res.innerHTML = `<p>${max}</p>`;
}