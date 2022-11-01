const timer = document.getElementById("progress")

const timerbarUpdate = () => {
    let aantalCompleted = localStorage.getItem('time');
    progress.innerHTML = `${aantalCompleted} / 3`;
    deel = (100 / 3) * aantalCompleted;

    progress.style.width = `${deel}%`;
}

timerbarUpdate()