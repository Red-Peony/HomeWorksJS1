const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

function changeSizes() {
    if (clickerCounter.textContent % 2 === 0) {
        image.width = 250;
        image.height = 200; 
    } else {
        image.width = 200;
        image.height = 128; 
    }
    
    clickerCounter.textContent ++;
}

image.onclick = changeSizes;


