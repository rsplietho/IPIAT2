const healthbar = document.getElementById("healthBar")
const health = document.getElementById("health")
let hp = localStorage.getItem('hpBar');

health.style.width = `${hp}%`;
health.innerHTML = `${hp}%`;