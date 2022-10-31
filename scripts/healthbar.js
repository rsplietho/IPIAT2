const healthbar = document.getElementById("healthBar")
const health = document.getElementById("health")

const healthbarUpdate = () => {
    let hp = localStorage.getItem('hpBar');
    health.style.width = `${hp}%`;
    health.innerHTML = `${hp}%`;
    if (hp <= 0){
        window.location.href = "gameover.html";
    }
}

healthbarUpdate()