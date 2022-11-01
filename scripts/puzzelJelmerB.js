let Button1 = document.getElementById("rightButton1");
let Button2 = document.getElementById("rightButton2");
let Button3 = document.getElementById("rightButton3");

Button1.addEventListener("click", function(e) {
    document.getElementById("code").innerHTML = "0";
    Button2.style.display = "block";
    Button1.style.display = "none";
});
Button2.addEventListener("click", function(e) {
    document.getElementById("code").innerHTML = "05";
    Button2.style.display = "none";
});