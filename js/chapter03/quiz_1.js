const ap = [1,3,5,7,9,11,13,15,17,19];

/* let moreThanTen = [];

ap.forEach((value) => {
    if(value >= 10){
        moreThanTen.push(value);
    } 
})
document.write(moreThanTen);
*/

let moreThanTen = ap.filter(nums => nums >= 10);
document.write(moreThanTen);