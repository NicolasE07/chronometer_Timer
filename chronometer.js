const milisecounds = document.querySelector('#milisecounds')
const secounds = document.querySelector('#secounds');
const minutes = document.querySelector('#minutes')
const hours = document.querySelector('#hours')
let milisecoundsValue = 0;
let secoundsValue = 0;
let minutesValue = 0;
let hoursValue = 0;
let currentChronometer = undefined;

function formatTime(valor) {
    return ('0' + valor).slice(-2)
}

function start() {

    if (currentChronometer === undefined) {
        currentChronometer = setInterval(() => {
            milisecoundsValue++
            milisecounds.textContent = formatTime(milisecoundsValue)
            secounds.textContent = formatTime(secoundsValue)
            minutes.textContent = formatTime(minutesValue)
            hours.textContent = formatTime(hoursValue)

            if (milisecoundsValue === 100) {
                milisecoundsValue = 0;
                secoundsValue++;
            }

            if (secoundsValue === 60) {
                secoundsValue = 0;
                minutesValue++
            }



            if (minutesValue === 59) {
                minutesValue = 0;
                hoursValue++;
            }

        }, 1)

    } else {
        stop()
        currentChronometer = undefined;
    }


}

function capturar() {
     vuelta1 = [[secoundsValue, minutesValue, hoursValue]]

    console.log(vuelta1[0], vuelta1[1], vuelta1[2])
}



function stop() {
    clearInterval(currentChronometer);
}

function reset() {
    stop()
    currentChronometer = undefined;
    milisecoundsValue = 0;
    secoundsValue = 0;
    minutesValue = 0;
    hoursValue = 0;
    milisecounds.textContent = "00";
    secounds.textContent = "00";
    minutes.textContent = "00"
    hours.textContent = "00"
}

let play = document.querySelector('.play')
let pause = document.querySelector('.pause')
let resetB = document.querySelector('.resetB')
document.addEventListener('click', (n) => {
    const clickedElement = n.target
    if (clickedElement.matches('.play')) {
        console.log(clickedElement);
        play.classList.add(`no-active`);
        pause.classList.remove(`no-active`)
        start()

    } else if (clickedElement.matches('.pause')) {
        pause.classList.add(`no-active`)
        play.classList.remove(`no-active`);
        stop()

    } else if (clickedElement.matches('.resetB')) {
        pause.classList.add(`no-active`)
        play.classList.remove(`no-active`)
        reset()
    }

})