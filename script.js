var timeBox = $('#currentTime');
let constantTime;

//constantly get time every second and upload it
function getTime() {
    var timeInterval = setInterval(function(){
        timeBox.text(moment().format("MMMM Mo YYYY, h:mm:ss A"))
    }, 1000)
}
getTime();

