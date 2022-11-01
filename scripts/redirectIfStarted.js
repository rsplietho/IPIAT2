let gameStarted = localStorage.getItem('gameStarted');

// Als de escaperoom is gestart is het niet meer mogelijk om op het startscherm te komen.
// Waardoor de hp bar dus niet midden in de escaperoom kan worden gereset
if(gameStarted == "true"){ 
    location.replace("huis.html")
};

// Hier worden alle waardes die binnen de localstorage moeten worden opgeslagen vanaf de start aangemaakt
function startEscapeRoom(){
    Notification.requestPermission().then(perm =>{
        if (perm === 'granted') {
            localStorage.setItem('hpBar', '100');
            localStorage.setItem('completedPuzzles', '0');
            localStorage.setItem('time', 600)
            localStorage.setItem('gameStarted', true)
            localStorage.setItem('key1Found', 0)
            localStorage.setItem('key2Found', 0)
            localStorage.setItem('key3Found', 0)
            window.location.href = "huis.html";
        }
        else{
            alert("Om de ultieme ervaring te hebben tijdens de escaperoom is deze permissie nodig.")
            window.location.href = "Startscherm.html";
        }
    });
}