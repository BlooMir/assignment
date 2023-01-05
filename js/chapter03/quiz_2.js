let usersNum = prompt("1보다 큰 숫자를 입력하시오");
let count = 0;

for (i = 1; i < usersNum; i++){
    if(i % 2 == 0){
        count = count + i;
        document.write(`${i} ------ ${count} <br>`);
    }
}