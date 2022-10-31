const healthpoints = localStorage.getItem('hpBar')

    Notification.requestPermission().then(perm =>{
        if (perm === 'granted') {

            if(hp == "50")
            new Notification('Boss', {
                body: "PAS OP DE POLITIE IS AL ONDERWEG",
                icon: "assets/JelmerO/icons8-boss-96.png",
            })



        }
    });