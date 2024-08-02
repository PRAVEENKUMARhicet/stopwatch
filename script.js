var hr = document.getElementById('hr');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var hours = 0, minutes = 0, seconds = 0, lapCount = 0;
let intervalId = null;

function start() {
    if (!intervalId) {
        intervalId = setInterval(stopWatch, 10);
    }
}

function stop() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
}

function reset() {
    stop();
    seconds = 0;
    minutes = 0;
    hours = 0;
    sec.innerHTML = "00";
    min.innerHTML = "00";
    hr.innerHTML = "00";
    lapCount = 0;
    var display = document.getElementsByClassName('display');
    for (let i = 0; i < display.length; i++) {
        display[i].innerText = "";
    }
}

function lap() {
    var display = document.getElementsByClassName('display')[0];
    var add = document.createElement('span');
    lapCount++;
    let sprefix=seconds < 10 ? "0" : "";
    let mprefix=minutes < 10 ? "0" : "";
    let hprefix=hours < 10 ? "0" : "";
    var val = "Lap " + lapCount + ": " + hprefix + hours + ":" + mprefix + minutes + ":" + sprefix + seconds;
    add.textContent = val;
    display.appendChild(add);
}

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes == 60) {
        hours++;
        minutes = 0;
    }
    if (hours == 60) {
        reset();
        alert("You are running overtime");
    }
    let sprefix=seconds < 10 ? "0" : "";
    let mprefix=minutes < 10 ? "0" : "";
    let hprefix=hours < 10 ? "0" : "";
    sec.innerHTML = sprefix + seconds;
    min.innerHTML = mprefix + minutes;
    hr.innerHTML = hprefix + hours;
}
