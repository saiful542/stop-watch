
//STOP WATCH

const startButton = document.querySelector('.display-stopwatch .start')
const pauseButton = document.querySelector('.display-stopwatch .pause')
const stopButton = document.querySelector('.display-stopwatch .stop')
let interval = null
let pause = null
let second = 0
let minute = 0
let hour = 0;
//display
const display = () => {
    stopwatch();

    if (second >= 9) {
        if (minute >= 9) {
            if (hour >= 9)
                document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>${hour} : ${minute} : ${++second}</p>`
            else
                document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>0${hour} : ${minute} : ${++second}</p>`
        }
        else {
            if (hour >= 9)
                document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>${hour} : 0${minute} : ${++second}</p>`
            else
                document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>0${hour} : 0${minute} : ${++second}</p>`
        }
    }
    else {
        if (minute >= 9) {
            if (hour >= 9)
                document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>${hour} : ${minute} : 0${++second}</p>`
            else
                document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>0${hour} : ${minute} : 0${++second}</p>`
        }
        else {
            if (hour >= 9)
                document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>${hour} : 0${minute} : 0${++second}</p>`
            else
                document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>0${hour} : 0${minute} : 0${++second}</p>`
        }

    }
}


// start
startButton.addEventListener('click', (e) => {
    startButton.textContent = 'start'
    if (!interval) {
        interval = setInterval(display, 1000)
    }
})

// pause
pauseButton.addEventListener('click', (e) => {
    if (!pause && interval != null) {
        pause = clearInterval(interval)
        interval = null
        startButton.textContent = 'resume'
    }
})
// stop
stopButton.addEventListener('click', (e) => {
    startButton.textContent = 'start'
    clearInterval(interval)
    reset();
})

//calculation
const stopwatch = () => {
    if (second >= 59) {
        second = -1;
        ++minute;
    }
    if (minute >= 59) {
        minute = -1;
        ++hour;
    }
}


// reset variables
const reset = () => {
    pause = null
    interval = null
    second = 0
    minute = 0
    hour = 0;
    document.querySelector('.display-stopwatch').firstElementChild.innerHTML = `<p>00 : 00 : 00</p>`
}



