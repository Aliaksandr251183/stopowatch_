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
    function redButton() {
        let timeInterval = false,
            timerNew = 0,
            countRedBut = 0;
            
        butRed.addEventListener('click', () => {
            countRedBut += 1; 
            if (countRedBut % 2 !== 0 || countBlueBut >= 1) {
                timeInterval = setInterval(function () {
                    const secondTime = Math.floor((timerNew / 100) % 60),
                        minuteTime = Math.floor((timerNew / (100 * 60)) % 60),
                        hourTime = Math.floor((timerNew * 60 * 60) % 24),
                        milisecondTime = Math.floor(timerNew % 100);

                    timerNew += 1;
                    second.innerHTML = getZero(secondTime);
                    minute.innerHTML = getZero(minuteTime);
                    hour.innerHTML = getZero(hourTime);
                    milisecond.innerHTML = getZero(milisecondTime);
                }, 10);
                butRed.classList.add('button-yellow');
                console.log(countBlueBut);
            }else {
                clearInterval(timeInterval);
                butRed.classList.toggle('button-yellow');
            }
            console.log(countBlueRed);
        });      
    }

    function blueButton() {
        let countBlueBut = 0;
        butBlue.addEventListener('click', () => {
            countBlueBut += 1;
           
            zeroBlocks.forEach(elem => {
                elem.innerHTML = '';
                elem.innerHTML = '00';
                
            });
            butRed.classList.toggle('button-yellow');
        console.log(countBlueBut);
        });
    }
    
    blueButton();
    redButton();   
});
