const healthpoints = localStorage.getItem('hpBar')
const time = localStorage.getItem('time')

    Notification.requestPermission().then(perm =>{
        if (perm === 'granted') {

            // notificatie  
            if(healthpoints == "50")
            // Boss is de titel
            new Notification('Boss', {
                // bericht binnen de notificatie
                body: "PAS OP DE POLITIE IS AL ONDERWEG",
                // afbeelding binnen de notificatie
                icon: "assets/JelmerO/icons8-boss-96.png",
            })

            
        }
    });