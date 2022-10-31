function Timer(window) {
    this.time = 0;
    this.window = window
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
    this.update = function(window, time, saveTime, loadTime) {
        time = loadTime()
        time++
        console.log(time)
        document.getElementById(window).innerHTML = time
        saveTime(time)
        return;
    };
    this.loadTime()
    setInterval(this.update, 1000, this.window, this.time, this.saveTime, this.loadTime)
};


window.onload = () => {timer = new Timer("timerWindow", 10)}