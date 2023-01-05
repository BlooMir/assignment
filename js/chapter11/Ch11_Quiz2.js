const bttn = document.querySelector("button");
const result = document.querySelector("#result");

bttn.addEventListener("click", () => {
    const prize = new Set();
    for(count=1; count < 7; count++){
      const lotterly = Math.round(Math.random() * 45);
      prize.add(lotterly);
      if(prize.size !== count){
        count = count - 1;
        continue;
      }
    }
    const wowNum = [...prize];
    wowNum.sort((a, b) => a - b);
    result.innerText = wowNum;
  // const prize = new Map();

  // for(count=0; count < 6; count++){
  //   const lotterly = Math.round(Math.random() * 45);
  //   if(prize.has(lotterly)){
  //     count = count - 1;
  //     continue;
  //   }
  //   prize.set(`${count}번공`,lotterly);
  // }
})

