const secounds = document.querySelector('#secounds');
const minutes = document.querySelector('#minutes')
const hours = document.querySelector('#hours')
const advertencia = document.getElementById('advertencia')
let secoundsValue = 0; //Number(prompt('Cuantos Segundos?'));
let minutesValue = 5; //Number(prompt('Cuantos Minutos'));
let hoursValue = 0;// Number(prompt('Cuantas horas?'))
let currentChronometer = undefined;

secounds.innerText = formatTimer(secoundsValue);
minutes.innerText = formatTimer(minutesValue);
hours.innerText = formatTimer(hoursValue);



function formatTimer(valor) {
    return ("0" + valor).slice(-2)


}

function start() {
    if (currentChronometer === undefined) {
        currentChronometer = setInterval(() => {

            secounds.textContent = formatTimer(secoundsValue)
            minutes.textContent = formatTimer(minutesValue)
            hours.textContent = formatTimer(hoursValue)


            if (secoundsValue === 0 && minutesValue === 0 && hoursValue === 0) {
                alert('felicidades')
                stop()
                reset()
                pause.classList.add(`no-active`)
                play.classList.remove(`no-active`)
                

            } else {

                if (secoundsValue === 0 && minutesValue === 0) {
                    secoundsValue = 60
                    minutesValue = 59
                    hoursValue -= 1

                }
                if (secoundsValue === 0) {
                    minutesValue -= 1
                    secoundsValue = 60


                }
                secoundsValue -= 1

            }

        }, 1000)
    } else {
        stop()
        currentChronometer = undefined;

    }
}

function stop() {
    clearInterval(currentChronometer)
}

function dlClickStart() {
    advertencia.innerText = "";
    secoundsValue = Number(prompt('Cuantos Segundos?'));
    minutesValue = Number(prompt('Cuantos Minutos'));
    hoursValue = Number(prompt('Cuantas horas?'))
    secounds.innerText = formatTimer(secoundsValue);
    minutes.innerText = formatTimer(minutesValue);
    hours.innerText = formatTimer(hoursValue);
    start()
    play.classList.add(`no-active`);
    pause.classList.remove(`no-active`)

}

function reset() {
    stop()
    advertencia.innerText = "Doble Click Para reiniciar";
    currentChronometer = undefined;
    secoundsValue = 0;
    minutesValue = 0;
    hoursValue = 0;
    secounds.innerText = "00";
    minutes.innerText = "00";
    hours.innerText = "00";
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


