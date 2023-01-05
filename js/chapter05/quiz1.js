const desc = document.querySelector(".hidden");
const btn = document.querySelector("#view");


btn.onclick = () => {
    desc.classList.toggle("open");
}
