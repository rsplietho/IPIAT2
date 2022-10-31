let gameStarted = localStorage.getItem('gameStarted');

// Als de escaperoom is gestart is het niet meer mogelijk om op het startscherm te komen.
// Waardoor de hp bar dus niet midden in de escaperoom kan worden gereset
if(gameStarted == "true"){ 
    location.replace("huis.html")
};

// Hier worden alle waardes die binnen de localstorage moeten worden opgeslagen vanaf de start aangemaakt
function startEscapeRoom(){
    localStorage.setItem('hpBar', '100');
    localStorage.setItem('completedPuzzles', '0');
    localStorage.setItem('time', 0)
    localStorage.setItem('gameStarted', true)
    window.location.href = "huis.html";
}
