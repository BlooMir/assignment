const url = "https://dummyjson.com/quotes";
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");


let rndNum = Math.floor(Math.random() * 30);


fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.quotes[rndNum]);

    quote.innerHTML = data.quotes[rndNum].quote;
    author.innerHTML = `- ` + data.quotes[rndNum].author;
  })
  .catch(error => console.log(error));