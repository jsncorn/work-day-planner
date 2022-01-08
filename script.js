//constantly get time every second and upload it
function getTime() {
    var timeBox = $('#currentTime');
    var timeInterval = setInterval(function(){
        timeBox.text(moment().format("MMMM Mo YYYY, h:mm:ss A"))
    }, 1000)
}
getTime();


var formArray = ['input8', 'input9', 'input10', 'input11', 'input12', 'input1', 'input2', 'input3', 'input4', 'input5', 'input6']
var timeArray = ['time0', 'time1', 'time2', 'time3', 'time4', 'time5', 'time6', 'time7', 'time8', 'time9', 'time10']
var dayStart = moment().startOf('day').add(7, 'hours');
for(var i = 0; i < 11; i++ ) {
    var timedArray = timeArray[i]
    var formattedTime = dayStart.add(1, 'hours').format('hh:mm A');
    $('.'+ timedArray).text(formattedTime)
}


//reset daystart since previous function altered it
dayStart = moment().startOf('day').add(7, 'hours');
function compareTime() {
    for(var i = 0; i < 11; i ++) {
        var addHour = 1;
        var houredArray = timeArray[i]
    houredArray = dayStart.add(addHour, 'hours');
    currentTime = moment().startOf('hour');
    addHour++;
    formElement = formArray[i];
    console.log(houredArray)
    if(currentTime.isAfter(houredArray)){
        $('.' + formElement).addClass('bg-secondary')
    }
    else if(currentTime.isBefore(houredArray)){
        $('.' + formElement).addClass('bg-success')
    }
    else if (currentTime.isSame(houredArray)) {
        $('.' + formElement).addClass('bg-info')
    }
}
}
compareTime();

$('.timeBtn').on('click', function() {
    console.log("this button works")
})