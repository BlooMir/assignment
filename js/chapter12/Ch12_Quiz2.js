const field = document.querySelector("#user-number");
const bttn = document.querySelector("#putIn");
const result = document.querySelector("#result");

bttn.addEventListener("click" , () => {
    const numIs = field.value;
    try
    {
        if(numIs > 10){
            throw new Error("10보다 작은 숫자를 입력해주세요.");
        }
        else if(!numIs || isNaN(numIs)){
            throw new Error("숫자를 입력해주세요.");
        }
        else{
            result.innerHTML = `<h3>${numIs}</h3>`;
        }
    }
    catch(err)
    {
        alert(err);
    }
});