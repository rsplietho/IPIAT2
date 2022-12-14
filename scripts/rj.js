const rng = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

async function lockPickPuzzle() {
    for (let pinNumber=0;pinNumber<6;pinNumber++) {
        const pin = document.getElementById(`pin${pinNumber}`)
        let height = rng(10,2)
        console.log(height)
        pin.style.height = `${height}em`
    } 
    
    for (let pinNumber=0;pinNumber<6;pinNumber++) {
        const pin = document.getElementById(`pin${pinNumber}`)
        speed = rng(1000,2000)
        let clicked = false
        let pinAnimation = pin.animate(
            [
                {transform: `translate(0,-10em)`},
                {transform: `translate(0,10em)`},
                {transform: `translate(0,-10em)`},
            ], {
                duration: speed,
                iterations: Infinity
            }
        );

        const line = document.getElementById('lockLine')
        
        await Click(document.getElementById("lock"))

        console.log("click")
        

        if(!isCollide(pin, line)) {
            pinAnimation.cancel
            failed()
        }

        pinAnimation.pause()
       

    }
    //notification("Het is gelukt, je bent binnen!")
    localStorage.setItem('key2Found', 1)
    localStorage.setItem('puzzle1Completed', 1)
    window.location.href = "./hallway.html"
    let completedPuzzles = localStorage.getItem('completedPuzzles')
    completedPuzzles++
    localStorage.setItem('completedPuzzles', completedPuzzles);
}

async function Click(btn) {
    return new Promise(resolve =>  btn.onclick = () => resolve());
}

let isCollide = (a, b) => {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
        ((aRect.top + aRect.height) < (bRect.top)) ||
        (aRect.top > (bRect.top + bRect.height)) ||
        ((aRect.left + aRect.width) < bRect.left) ||
        (aRect.left > (bRect.left + bRect.width))
    );
}

const passed = () => {
    let completedPuzzles = localStorage.getItem('completedPuzzles')
    completedPuzzles++
    localStorage.setItem('completedPuzzles', completedPuzzles);
    document.getElementById("lock").innerHTML = "<a href='./puzzleJelmerB.html' class='goAhead'>GA NAAR BINNEN</a>"
}

const failed = () => {
    window.location.reload()
}



window.addEventListener("load", lockPickPuzzle, false); 