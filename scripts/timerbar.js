const timer = document.getElementById("timerWindow")

const timerbarUpdate = () => {
    let time = localStorage.getItem('time')
    timer.style.width = `${time/6}%`;
}

timerbarUpdate()