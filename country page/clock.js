let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function calcTime(){
    let time = new Date();

    let h = time.getHours();
    let m =time.getMinutes();
    let s = time.getSeconds();

    let hourFormela = 30*h + m/2 + s/120;
    let minutesFormela = 6 * m + s/10;
    let secondsFormela = 6 *s;

    hours.style.transform = `rotate(${hourFormela}deg)`;
    minutes.style.transform = `rotate(${minutesFormela}deg)`;
    seconds.style.transform = `rotate(${secondsFormela}deg)`;
}
setInterval(calcTime,1000)