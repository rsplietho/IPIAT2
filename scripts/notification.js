const healthpoints = localStorage.getItem('hpBar')
const time = localStorage.getItem('time')
const key1Found = localStorage.getItem('key1Found')
const key2Found = localStorage.getItem('key2Found')
const key3Found = localStorage.getItem('key3Found')

Notification.requestPermission().then(perm => {
    if (perm === 'granted') {

        // notificatie
        if (healthpoints == "50")
            // Boss is de titel
            new Notification('Boss', {
                // bericht binnen de notificatie
                body: "PAS OP DE POLITIE IS AL ONDERWEG",
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



