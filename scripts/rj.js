const rng = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

function lockPickPuzzle() {
    for (let pinNumber=0;pinNumber<6;pinNumber++) {
        const pin = document.getElementById(`pin${pinNumber}`)
        let height = rng(10,2)
        console.log(height)
        pin.style.height = `${height}em`
    } 
    
    for (let pinNumber=0;pinNumber<6;pinNumber++) {
        const pin = document.getElementById(`pin${pinNumber}`)
        speed = rng(500,2000)
        let clicked = false
        pin.animate(
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

        

    }
}

async function collsionchecker() {
    await isCollide
    console.log("COLLISION")

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


const checkGameOver = () => {
    if (localStorage.getItem('hpBar') == 0){
        window.location.href = "gameover.html";
    }
}

window.onload = () => {
    lockPickPuzzle()
}