const daysEl  = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYear = "1 Jan 2021";

function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds /3600 /24);
    const hours = Math.floor(totalSeconds /3600) % 24;
    const minutes = Math.floor(totalSeconds /60) % 60;
    const second = Math.floor(totalSeconds) % 60;
   // console.log(days, hours, minutes, second);

   daysEl.innerHTML = days;
   hoursEl.innerHTML = formatTime(hours);
   minsEl.innerHTML = formatTime(minutes);
   secondsEl.innerHTML = formatTime(second);

   if( newYearsDate === currentDate || newYearsDate <= currentDate){
       daysEl.innerHTML = "0";
       hoursEl.innerHTML = "0";
       minsEl.innerHTML = "0";
       secondsEl.innerHTML = "0";
   }

}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown,1000);