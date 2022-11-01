function welcomeText() {
    const textArray = document.getElementById('welcome').innerHTML.split('');
    document.getElementById('welcome').innerHTML = '';

    for(i=0;i<textArray.length;i++){
        setTimeout(function(i){
            document.getElementById('welcome').innerHTML += textArray[i];
        }, 50 * i, i)
    }
}

window.addEventListener("load", welcomeText, false);