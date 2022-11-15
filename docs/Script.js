let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');
let millisecond = document.querySelector('#millisecond');
let start = document.querySelector('#start-btn');
let lapBtn = document.querySelector('#lap-btn');
let countDiv = document.querySelector('#count-div');
let lapDiv = document.querySelector('#laps');
let pause = document.querySelector("#pause-btn");


millisecond.innerHTML = '0';
second.innerHTML = '00';
minute.innerHTML = '00';
hour.innerHTML = '00';


start.addEventListener("click", function(){

    start.innerHTML = 'Reset';
    start.style.backgroundColor = 'red';
    start.addEventListener("click", function(){
        window.location.reload();
    });
    
        var milliInterval = setInterval(() => {
            millisecond.innerHTML ++;
        }, 100);
        var secInterval = setInterval(function(){
            second.innerHTML ++;
            millisecond.innerHTML = 0;
            if(second.innerHTML != '00' && second.innerHTML < 10){
                second.innerHTML = '0' + second.innerHTML;
            }
        }, 1000);
        var minuteInterval = setInterval(() => {
            minute.innerHTML ++;
            second.innerHTML = '00';
            if(minute.innerHTML != '00' && minute.innerHTML < 10){
                minute.innerHTML = '0' + minute.innerHTML;
            }
        }, 60000);
        var hourInterval = setInterval(() => {
            hour.innerHTML ++;
            minute.innerHTML = '00';
            if(hour.innerHTML != '00' && hour.innerHTML < 10){
                hour.innerHTML = '0' + hour.innerHTML;
            }
        }, 3600000);

        if(pause.innerHTML === 'Pause'){
                pause.addEventListener("click", function(){
                    clearInterval(milliInterval);
                    clearInterval(secInterval);
                    clearInterval(minuteInterval);
                    clearInterval(hourInterval);
                    pause.innerHTML = 'Resume';
                    pause.style.backgroundColor = 'green';
            });
        }
        else if(pause.innerHTML === 'Resume'){
            pause.addEventListener("click"), function(){
                pause.innerHTML = 'Pause';
                pause.style.backgroundColor = 'orange';
                // var milliInterval = setInterval(() => {
                //     millisecond.innerHTML ++;
                // }, 100);
            }
        };
             
            // if(pause.innerHTML == 'Resume'){
            //     var secInterval = setInterval(function(){
            //         second.innerHTML ++;
            //         millisecond.innerHTML = 0;
            //         if(second.innerHTML != '00' && second.innerHTML < 10){
            //             second.innerHTML = '0' + second.innerHTML;
            //         }
            //     }, 1000);
            //     var minuteInterval = setInterval(() => {
            //         minute.innerHTML ++;
            //         second.innerHTML = '00';
            //         if(minute.innerHTML != '00' && minute.innerHTML < 10){
            //             minute.innerHTML = '0' + minute.innerHTML;
            //         }
            //     }, 60000);
            //     var hourInterval = setInterval(() => {
            //         hour.innerHTML ++;
            //         minute.innerHTML = '00';
            //         if(hour.innerHTML != '00' && hour.innerHTML < 10){
            //             hour.innerHTML = '0' + hour.innerHTML;
            //         }
            //     }, 3600000);
            // }
})





lapBtn.addEventListener("click", function(){
    if(millisecond.innerHTML != 0){
        let newLap = document.createElement('div');
        newLap.className = 'lap';
        lapDiv.appendChild(newLap);
        
    let serialNo = document.createElement('div');
        serialNo.className = 'sn';
        newLap.appendChild(serialNo);

    let lapTime = document.createElement('div');
        lapTime.className = 'lapTime';
        newLap.appendChild(lapTime);
        
    let lapHour = document.createElement('div');
        lapHour.className = 'lap-hour';
        lapTime.appendChild(lapHour);
        lapHour.innerHTML = hour.innerHTML + ':';
        
    let lapMin = document.createElement('div');
        lapMin.className = 'lap-minute';
        lapTime.appendChild(lapMin);
        lapMin.innerHTML = minute.innerHTML + ':';

    let lapSec = document.createElement('div');
        lapSec.className = 'lap-second';
        lapTime.appendChild(lapSec);
        lapSec.innerHTML = second.innerHTML + ':';

    let lapMilli = document.createElement('div');
        lapMilli.className = 'lap-millisecond';
        lapTime.appendChild(lapMilli);
        lapMilli.innerHTML = millisecond.innerHTML;
    }
});

// var val = parseInt(second.innerHTML);
// val ++;
// second.innerHTML = val;

// console.log(window.Date())
