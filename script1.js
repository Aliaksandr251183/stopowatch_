"use strict"

window.addEventListener('DOMContentLoaded', () => {
    const butRed = document.querySelector('.button-red'),
        butBlue = document.querySelector('.button-blue'),
        zeroTime = new Date(),
        objectTimeZero = {
            'hour': 0,
            'minute': 0,
            'second': 0,
            'milisecond': 0
        };

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    const stopwatch = document.querySelector('.stopwatch'),
        hour = stopwatch.querySelector('#hour'),
        minute = stopwatch.querySelector('#minute'),
        second = stopwatch.querySelector('#second'),
        milisecond = stopwatch.querySelector('#milisecond'),
        myStopwatch = setInterval(myNum, 1000);
    myNum();
    
    function myNum() {
        hour.innerHTML = getZero(objectTimeZero.hour);
        minute.innerHTML =getZero(objectTimeZero.minute);
        second.innerHTML = getZero(objectTimeZero.second);
        milisecond.innerHTML = getZero(objectTimeZero.milisecond);
    }

    butRed.addEventListener('click', () => {
        butRed.classList.toggle('button-yellow');
        myStopwatch;
    });

    butBlue.addEventListener('click', () => {
        butBlue.classList.toggle('button-yellow');
        butBlue.classList.toggle('button-blue');
        clearInterval(myStopwatch);
    });
 
});