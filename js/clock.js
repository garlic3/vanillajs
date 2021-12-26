const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const years = String(date.getFullYear());
    const months = String(date.getMonth() + 1);
    const days = String(date.getDate());
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${years}년 ${months}월 ${days}일 ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

