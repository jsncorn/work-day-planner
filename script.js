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
    var formattedTime = dayStart.add(1, 'hours').format('hh:mm A');
    $('.'+ timedArray).text(formattedTime)
}

dayStart = moment().startOf('day').add(7, 'hours');
function compareTime() {
    for(var i = 0; i < 11; i ++) {
        var addHour = 1;
        var houredArray = timeArray[i]
    houredArray = dayStart.add(addHour, 'hours');
    currentTime = moment().startOf('hour');
    test++;
    if(currentTime.isAfter(houredArray)){
        console.log('after')
        console.log(currentTime)
        console.log(houredArray)
    }
    else if(currentTime.isBefore(houredArray)){
        console.log('before')
    }
    else if (currentTime.isSame(houredArray)) {
        console.log('same')
    }
}
}
compareTime();