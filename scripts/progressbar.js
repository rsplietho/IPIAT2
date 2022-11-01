const progressB = document.getElementById("progressBar")
const progress = document.getElementById("progress")

const progressbarUpdate = () => {
    let aantalCompleted = localStorage.getItem('completedPuzzles');
    progress.innerHTML = `${aantalCompleted} / 3`;

    deel = (100 / 3) * aantalCompleted;

    progress.style.width = `${deel}%`;
}

progressbarUpdate()