//constantly get time every second and upload it
function getTime() {
    var timeBox = $('#currentTime');
    var timeInterval = setInterval(function(){
        timeBox.text(moment().format("MMMM Mo YYYY, h:mm:ss A"))
    }, 1000)
}
getTime();

var dayStart = moment().startOf('day').add(7, 'hours');

var timeArray = ['time0', 'time1', 'time2', 'time3', 'time4', 'time5', 'time6', 'time7', 'time8', 'time9', 'time10']
for(var i = 0; i < 11; i++ ) {
    var timedArray = timeArray[i]
    console.log(timedArray)
    var formattedTime = dayStart.add(1, 'hours').format('hh:mm A');
    $('.'+ timedArray).text(formattedTime)
}