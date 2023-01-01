const noticeBox = document.querySelector("#noti-box");
const btn = document.querySelector("#bttn");

btn.addEventListener("click", (e) => {
    const popUp = document.createElement("div");
    popUp.innerText = '알림 영역 생성';

    popUp.classList.add("noti");

    noticeBox.appendChild(popUp);

    setTimeout(() => noticeBox.removeChild(popUp), 3000);
});