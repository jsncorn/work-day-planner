//constantly get time every second and upload it
function getTime() {
    var timeBox = $('#currentTime');
    var timeInterval = setInterval(function(){
        timeBox.text(moment().format("MMMM Mo YYYY, h:mm:ss A"))
    }, 1000)
}
getTime();

