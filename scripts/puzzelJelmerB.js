let Button1 = document.getElementById("rightButton1");
let Button2 = document.getElementById("rightButton2");
let Button3 = document.getElementById("rightButton3");
let ButtonConfirm = document.getElementById("confirm");

Button1.addEventListener("click", function(e) {
    document.getElementById("code").innerHTML = "0";
    Button2.style.display = "block";
    Button1.style.display = "none";
});
Button2.addEventListener("click", function(e) {
    document.getElementById("code").innerHTML = "05";
    Button2.style.display = "none";
    Button3.style.display = "block";
});
Button3.addEventListener("click", function(e) {
    document.getElementById("code").innerHTML = "052";
    document.getElementById("confirm").style.display = "block"
    document.getElementsByClassName("button_alarm1").style.display = "none"
    document.getElementsByClassName("button_alarm2").style.display = "none"
    document.getElementsByClassName("button_alarm3").style.display = "none"
    document.getElementsByClassName("button_alarm4").style.display = "none"
    document.getElementsByClassName("button_alarm5").style.display = "none"
    document.getElementsByClassName("button_alarm6").style.display = "none"
    document.getElementsByClassName("button_alarm7").style.display = "none"
    document.getElementsByClassNamp("button_alarm8").style.display = "none"
    document.getElementsByClassName("button_alarm9").style.display = "none"
    document.getElementsByClassName("button_alarm10").style.display = "none"
});

ButtonConfirm.addEventListener("click", function(e) {
    // obtain 3rd key
    localStorage.setItem('key3Found', 1)
    localStorage.setItem('puzzle2Completed', 1)

    aantal = localStorage.getItem('completedPuzzles');
    aantal++
    localStorage.setItem('completedPuzzles', aantal)
    
    window.location.href = "hallway.html"


});