const url = "https://reqres.in/api/products/10"
const result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);
    result.innerHTML = `
      <p class="product" >상품명 : ${product.data.name}</p>
      <p class="product" >생산년도 : ${product.data.year}</p>
      `;
    }
  }