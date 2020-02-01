let button=document.getElementById('audio');
var audio = new Audio('./sounds/twenty one pilots_ Stressed Out [OFFICIAL VIDEO].mp3');
button.addEventListener('click',()=>{
    let alarm=document.getElementById('alarm');
    let time=alarm.value;
    time=time.split(':');
    time=parseInt(time[0])*3600+parseInt(time[1])*60;
    let cur_time=new Date();
    cur_time=cur_time.getHours()*3600+cur_time.getMinutes()*60+cur_time.getSeconds();
    console.log((time-cur_time)*1000);    
    setTimeout(() => {
        console.log('hello guys wake up');    
        audio.play();    
    }, (time-cur_time)*1000);
})
let stopAlarm=document.getElementById('stopAlarm');
stopAlarm.addEventListener('click',()=>{
    audio.pause();
})
