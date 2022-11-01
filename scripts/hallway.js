const door1 = document.getElementById('hwDoor1');
const door2 = document.getElementById('hwDoor2');
const door3 = document.getElementById('hwDoor3');

if(localStorage.getItem('key1Found') == 0){
    localStorage.setItem('key1Found', 1)
}

door1.addEventListener('click', function() {
    window.location.href = "puzzleRobertJan.html";
});

door2.addEventListener('click', function() {
    window.location.href = "puzzleJelmerB.html";
});

door3.addEventListener('click', function() {
    window.location.href = "puzzleJelmerO.html";
});

if(localStorage.getItem('puzzle1Completed') == 1){
    door1.classList.add('doorCompleted');
}

if(localStorage.getItem('puzzle2Completed') == 1){
    door2.classList.add('doorCompleted');
}

if(localStorage.getItem('puzzle3Completed') == 1){
    door3.classList.add('doorCompleted');
}