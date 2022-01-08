//constantly get time every second and upload it
function getTime() {
    var timeBox = $('#currentTime');
    var timeInterval = setInterval(function(){
        timeBox.text(moment().format("MMMM Mo YYYY, h:mm:ss A"))
    }, 1000)
}
getTime();

var dayStart = moment().startOf('day').add(8, 'hours').format('hh:mm A');

var time0 = dayStart
$('.time0').text(time0)
