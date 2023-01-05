const pic = document.querySelector(`#plant`);


pic.addEventListener("mouseover", () => {
  document.getElementById(`plant`).src = "./images/pic-6.jpg";
});
pic.addEventListener("mouseout", () => {
  document.querySelector(`#plant`).src = "./images/pic-1.jpg";
});
