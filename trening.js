"use strict"

window.addEventListener('DOMContentLoaded', () => {
    const butRed = document.querySelector('.button-red'),
        butBlue = document.querySelector('.button-blue'),
        stopwatch = document.querySelector('.stopwatch'),
        hour = stopwatch.querySelector('#hour'),
        minute = stopwatch.querySelector('#minute'),
        second = stopwatch.querySelector('#second'),
        milisecond = stopwatch.querySelector('#milisecond'),
        zeroBlocks = document.querySelectorAll('.block');
        
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    
    let countRedBut = 0,
        timerNew = 0,
        timeInterval;
   
    butRed.addEventListener('click', () => {
        countRedBut += 1; 
        butRed.classList.toggle('button-yellow');
        if (countRedBut % 2 != 0) {
            butRed.classList.remove('button-red');
            timeInterval = setInterval(function () {
            const secondTime = Math.floor((timerNew / 100) % 60),
                minuteTime = Math.floor((timerNew / (100 * 60)) % 60),
                hourTime = Math.floor((timerNew * 60 * 60) % 24),
                milisecondTime = Math.floor(timerNew % 100);
            timerNew += 1;
                milisecond.innerHTML = getZero(milisecondTime);
                second.innerHTML = getZero(secondTime);
                minute.innerHTML = getZero(minuteTime);
                hour.innerHTML = getZero(hourTime);           
    }, 10);;
        } else {
            butRed.classList.add('button-red');
            clearInterval(timeInterval);
        }
        
        console.log(countRedBut);
    });      
  
    let countBlueBut = 0;
    butBlue.addEventListener('click', () => {
        countBlueBut += 1;
        if (countBlueBut >= 1) {
            butRed.classList.remove('button-yellow');
            butRed.classList.add('button-red');
            countRedBut = 0;
            clearInterval(timeInterval);
            // zeroBlocks.forEach(elem => {
            //     elem.innerHTML = '';
            //     elem.innerHTML = '00';           
            // });
            timerNew = 0;
            const secondTime = Math.floor((timerNew / 100) % 60),
                minuteTime = Math.floor((timerNew / (100 * 60)) % 60),
                hourTime = Math.floor((timerNew * 60 * 60) % 24),
                milisecondTime = Math.floor(timerNew % 100);
            milisecond.innerHTML = getZero(milisecondTime);
            second.innerHTML = getZero(secondTime);
            minute.innerHTML = getZero(minuteTime);
            hour.innerHTML = getZero(hourTime);
        }
    }); 
});
