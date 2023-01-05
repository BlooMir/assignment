const seed = document.querySelector("#seed");
const prize = document.querySelector("#total");
const result = document.querySelector("#result");
const btn = document.querySelector("#raffle");

let prizePeople = [];

btn.addEventListener("click", (e) => {
    for(i=0; i < prize.value; i++){
        prizePeople.push(Math.floor( Math.random() * seed.value )); 
    }

    result.classList.add("show");
    result.innerText = "당첨자 : ";

    prizePeople.forEach(function(value){
        result.innerText += " " + value + "번,";
    });
    console.log(prizePeople);
    e.preventDefault();
});


