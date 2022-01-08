var timeBox = document.getElementById('currentTime');
let constantTime;

function getTime() {
    var timeInterval = setInterval(function(){
        timeBox.textContent = moment().format("MMMM Mo YYYY, h:mm:ss A")
    }, 1000)
}
getTime();