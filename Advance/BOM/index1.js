
let message = document.getElementById("para");

(function startClock(){
    let date = new Date();
    let hours = date.getHours();
    let minites = date.getMinutes();
    let seconds = date.getSeconds();

    minites = formatTime(minites);
    hours = formatTime(hours);
    seconds = formatTime(seconds);

    let time = hours + ":" + minites + ":" + seconds;
    message.textContent = time;

    setInterval(startClock, 1000);
})();

function formatTime(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}