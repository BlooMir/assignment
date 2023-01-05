let rNum = parseInt(prompt("숫자를 입력하세요"));

const jujNum = (rNum) => {
  if(rNum > 0){
    alert(rNum + "은 양수입니다.");
  }
  else if(rNum < 0){
    alert(rNum + "은 음수입니다.");
  }
  else if(rNum === 0){
    alert("입력받은 값이 0입니다.");
  }
  else{
    alert("숫자를 입력해주세요");
  }
};

jujNum(rNum);