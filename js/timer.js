function Timer(window) {
    this.time = 0
    this.window = window
    this.start = () => {
        while(true) {
            let date = Date.now()
            let stopconditie = true
            while(stopconditie) {
                let currentTime = Date.now()
                if(currentTime == date+1000){
                    stopconditie = false
                }
            }
            this.time++
            this.update()
        }
    }
    this.saveTime = () => {
        localStorage.setItem('time', this.time);
    }
    this.loadTime = () => {
        time = localStorage.getItem('time');
    }
    this.update = () => {
        document.getElementById(this.window).innerHTML = this.time
    }
}