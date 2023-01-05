const dateYear = document.querySelector("#year");
const dateMonth = document.querySelector("#month");
const dateDay = document.querySelector("#day");
const btn = document.querySelector("#bttn");

const now = document.querySelector("#current");
const enhance = document.querySelector("#days");
const hour = document.querySelector("#hours");


btn.addEventListener("click", () => {
    const birthDay = new Date(dateYear.value, dateMonth.value - 1, dateDay.value);
    const today = new Date();
    const passedTimeAge = today.getTime() - birthDay.getTime();

    let passedHourAge = Math.round(passedTimeAge / (1000 * 60 * 60));
    let passedDayAge = Math.round(passedTimeAge / (1000 * 60 * 60 * 24));

    now.innerText = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDay()}일 ${today.getHours()}시 ${today.getMinutes()}분 현재`;
    enhance.innerText = `날짜로는 ${passedDayAge} 일이 흐르고`
    hour.innerText = `시간으로는 ${passedHourAge} 시간이 흘렀습니다.`
});





