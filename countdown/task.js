/*const statusTimer = document.getElementById("status");
statusTimer.textContent = "До окончания акции осталось";*/
const countdown = function(){
    const timer = document.getElementById("timer");  
    if (timer.textContent > 0) {
        timer.textContent-=1;
    } 
    else {
        clearInterval(timerID);
        return alert("Вы победили в конкурсе!");
    }
}

let timerID = setInterval(countdown, 100);


