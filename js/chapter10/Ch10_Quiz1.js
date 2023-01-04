const basic = [2,4,6,8,10];
let arraySum = 0;
const oriGin = document.querySelector("#origin");
const result = document.querySelector("#result");

function displayArray(id, array){
  const table = document.createElement("table");
  array.forEach(function(value){
    const td = document.createElement("td");
    
    td.innerText = value;
    
    table.appendChild(td);
    });
    id.appendChild(table);
}

displayArray(oriGin, basic);

basic.forEach(function(value){
  arraySum += value;
})
basic.push(arraySum);

displayArray(result, basic);







// const tableOri = document.createElement("table");
// const tableUlt = document.createElement("table");

// basic.forEach(function(value){
//   const tdOri = document.createElement("td");
//   const tdUlt = document.createElement("td");

//   arraySum += value;

//   tdOri.innerText = value;
//   tdUlt.innerText = value;

//   tableOri.appendChild(tdOri);
//   tableUlt.appendChild(tdUlt);
// });

// const pushSum = document.createElement("td");
// pushSum.innerText = arraySum;

// tableUlt.appendChild(pushSum);

// oriGin.appendChild(tableOri);
// result.appendChild(tableUlt);



