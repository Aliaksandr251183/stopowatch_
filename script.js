"use strict"

window.addEventListener('DOMContentLoaded', () => {
    
    const buttonRed = document.querySelector('.button-red'),
        buttonBlue = document.querySelector('.button-blue'),
        start = '00-00-00.00';
    
    function objectTime(timeStart) {
        const element = Date.parse(timeStart),
            hour = Math.floor((element / (1000 * 60 * 60)) % 24),
            minute = Math.floor((element / (1000 * 60)) % 60),
            second = Math.floor((element / 1000) % 60),
            milisecond = Math.floor((element / 10000));
        return {
            'hour': hour,
            'minute': minute,
            'second': second,
            'milisecond': milisecond
        };
    }

    function getZero(num) {       
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // function myTimer(selector, timeStart) {
    //     const timer = document.querySelector(selector),
    //         hours = timer.querySelector('#hour'),
    //         minutes = timer.querySelector('#minute'),
    //         seconds = timer.querySelector('#second'),
    //         miliseconds = timer.querySelector('#milisecond');
    //         timeInterval = setInterval(updateClock, 1000);
    //         updateClock();
    //     function updateClock() {
    //         const ourElements = objectTime(timeStart);
    //         hours.innerHTML = getZero(ourElements.hour);
    //         minutes.innerHTML = getZero(ourElements.minute);
    //         seconds.innerHTML = getZero(ourElements.second);
    //         miliseconds.innerHTML = getZero(ourElements.milisecond);

    //         if (ourElements.hour >= 0) {
    //             return timeInterval;
    //         } else {
    //             return clearInterval(timeInterval);
                
    //         }          
    //     }       
    // myTimer('.stopwatch', start);
    // }
    function myTimer(selector, timeStart) {
        const timer = document.querySelector(selector),
           
            hours = timer.querySelector('#hour'),
            minutes = timer.querySelector('#minute'),
            seconds = timer.querySelector('#second'),
            miliseconds = timer.querySelector('#milisecond');
            timeInterval = setInterval(updateClock, 1000); //
            updateClock();
        function updateClock() {
            const timeNow = objectTime(timeStart);
            hours.innerHTML = getZero(timeNow.hour);
            minutes.innerHTML = getZero(timeNow.minute);
            seconds.innerHTML = getZero(timeNow.second);
            miliseconds.innerHTML = getZero(timeNow.day)
            
            if (timeNow.hour >= 0) {
                timeInterval;                
            } else {
                clearInterval(timeInterval); //
            }
        }
    }
    myTimer('.stopwatch', start);
    console.log(start);
});

