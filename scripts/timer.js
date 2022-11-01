function Timer(timeWindow) {
    this.time = 600;
    this.timeWindow = timeWindow
    this.start = function() {
        setInterval(this.update(), 1000)
    };
    this.saveTime = function(time) {
        localStorage.setItem('time', time);
        this.time = time
    };
    this.loadTime = function() {
        this.time = localStorage.getItem('time');
        return localStorage.getItem('time');
    };
    this.resetTime = function() {
        localStorage.setItem('time', 0);
    };
    this.update = function(timeWindow, time, saveTime, loadTime) {
        time = loadTime()
        time--
        console.log(time)
        if(time<=0){
            window.location.href = "./gameover.html";
        }
        if(time<60){
            document.getElementById(timeWindow).innerHTML = time
        }
        if(time>=60){
            minutes = Math.trunc(time/60)
            seconds = time-minutes*60
            document.getElementById(timeWindow).innerHTML = minutes+":"+seconds
        }
        saveTime(time)
        return;
    };
    this.loadTime()
    setInterval(this.update, 1000, this.timeWindow, this.time, this.saveTime, this.loadTime)
};


window.onload = () => {timer = new Timer("timerWindow")}
