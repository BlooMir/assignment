const url = "https://dummyjson.com/quotes";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
  })
  .catch(error => console.log(error));