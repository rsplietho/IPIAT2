const time = localStorage.getItem('time')
const key1Found = localStorage.getItem('key1Found')
const key2Found = localStorage.getItem('key2Found')
const key3Found = localStorage.getItem('key3Found')

setInterval(checkForNoti, 100);
function checkForNoti() {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
    
            //notificatie
            if (time == 200)
                // Boss is de titel
                new Notification('Boss', {
                    // bericht binnen de notificatie
                    body: "PAS OP DE POLITIE IS AL ONDERWEG",
                    // afbeelding binnen de notificatie
                    icon: "assets/JelmerO/icons8-boss-96.png",
                })
    
    
                if (time == 100)
                // Boss is de titel
                new Notification('Boss', {
                    // bericht binnen de notificatie
                    body: "Je kunt maar beter haast maken",
                    // afbeelding binnen de notificatie
                    icon: "assets/JelmerO/icons8-boss-96.png",
                })
    
                if (time == 25)
                // Boss is de titel
                new Notification('Boss', {
                    // bericht binnen de notificatie
                    body: "Ze lopen nu naar de deur",
                    // afbeelding binnen de notificatie
                    icon: "assets/JelmerO/icons8-boss-96.png",
                })
    
                if (time == 5)
                // Boss is de titel
                new Notification('Boss', {
                    // bericht binnen de notificatie
                    body: "BONK BONK BONK",
                    // afbeelding binnen de notificatie
                    icon: "assets/JelmerO/icons8-boss-96.png",
                })
    
            // notificatie voor vinden van de zwarte / eerste sleutel
            if (key1Found == 1) {
                localStorage.setItem('key1Found', 3)
                // Boss is de titel
                new Notification('Alert', {
                    // bericht binnen de notificatie
                    body: "Je hebt de RODE sleutel gevonden, hij zat nog in de deur 1/3",
                    // afbeelding binnen de notificatie
                    icon: "assets/JelmerO/img/keyRed.png",
                })
            }
    
            // notificatie voor vinden van de rode / tweede sleutel
            if (key2Found == 1) {
                localStorage.setItem('key2Found', 3)
                // Boss is de titel
                new Notification('Alert', {
                    // bericht binnen de notificatie
                    body: "Je hebt de ZWARTE sleutel gevonden 2/3",
                    // afbeelding binnen de notificatie
                    icon: "assets/JelmerO/img/key.png",
                })
            }
    
            // notificatie voor vinden van de blauwe / laatste sleutel
            if (key3Found == 1) {
                localStorage.setItem('key3Found', 3)
                // Boss is de titel
                new Notification('Alert', {
                    // bericht binnen de notificatie
                    body: "Je hebt de BLAUWE sleutel gevonden 3/3",
                    // afbeelding binnen de notificatie
                    icon: "assets/JelmerO/img/keyBlue.png",
                })
            }
    
    
        }
    });
}



function jelmerOHint() {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            new Notification('HINT', {
                // bericht binnen de notificatie
                body: "Vind de andere sleutels door puzzles te voltooien",
            })
        }
    });
}

function hallwayHint() {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            new Notification('HINT', {
                // bericht binnen de notificatie
                body: "Klik op de deuren om de puzzles te starten",
            })
        }
    });
}

function huisHint() {
    Notification.requestPermission().then(perm => {
        if (perm === 'granted') {
            new Notification('HINT', {
                // bericht binnen de notificatie
                body: "Klik op de deur om verder te gaan",
            })
        }
    });
}



