const image = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

image.onclick = function() {
    clickerCounter += 1;
    console.log(clickerCounter);
    image.width = 300;
    image.height = 300;
}



    
