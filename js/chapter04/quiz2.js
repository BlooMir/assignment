const num_first = parseInt(prompt("첫 번째 숫자"));
const num_second = parseInt(prompt("두 번째 숫자"));

const smaller = num_first<num_second ? num_first : num_second;
const bigger = num_first>num_second ? num_first : num_second;
let max;

for(i=0; i <= smaller; i++){
  if(smaller % i === 0){
    if(bigger % i === 0){
      max = i;
    }
  }
}

document.write(`<h3>${num_first}와 ${num_second}의 최대공약수는 ${max}입니다.</h3>`);