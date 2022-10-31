function Timer(window, allottedTime) {
    var time = 0;
    var allottedTime = 10
    this.start = function() {
        setInterval(this.update(), 1000)
    };
    this.saveTime = function() {
        localStorage.setItem('time', this.time);
    };
    this.loadTime = function() {
        time = localStorage.getItem('time');
    };
    this.update = function(window, allottedTime) {
        time++
        if (allottedTime != null) {
            allottedTime--
            if (allottedTime == 0) {
                alert("time up!")
            }
        }
        console.log(time)
        console.log(allottedTime)
        document.getElementById("timerWindow").innerHTML = time+", "+allottedTime
        return;
    };
    console.log(time)
    console.log(allottedTime)
    setInterval(this.update, 1000)
};