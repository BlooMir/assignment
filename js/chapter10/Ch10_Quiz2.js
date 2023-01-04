const origin = document.querySelector("#origin");
const result = document.querySelector("#result");

let numbers = [2, 4, 6, 8, 10];

function tail(array){
  if(array.length === 1){
    return array;
  }
  else if (array.length > 1){
    return array.slice(1);
  }
  else{
    alert("배열 똑바로 넣으쇼");
  }
};

origin.innerText = numbers;
result.innerText = tail(numbers);
