const timeLeft = document.getElementById('showTimeLeft')
const showTime = document.getElementById('showTime')


const time = localStorage.getItem('time')

const t = 600 - time;
timeLeft.innerHTML = t

showTime.innerHTML = time