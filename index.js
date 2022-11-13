const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

const hours = document.querySelector('#hour')
const minutes = document.querySelector('#min')
const seconds = document.querySelector('#sec')

let hour = parseInt(document.querySelector('#hour').innerHTML)
let min = parseInt(document.querySelector('#min').innerHTML)
let sec = parseInt(document.querySelector('#sec').innerHTML)

start.addEventListener('click',() => {
   startStopWatch()
})

stop.addEventListener('click',() => {
    console.log("hi")
    stopWatch()
})

reset.addEventListener('click',() => {
    resetStopWatch();
})

let time 

const startStopWatch = () => {
    time = setInterval(() => { 
        sec++;
        if(sec>=60) 
        {
            sec -=60
            min++
            if(min>=60) 
            {
                min -= 60
                hour++;
                if(hour<10) hours.innerHTML = "0"+hour.toString()
                hours.innerHTML = hour.toString()
            }
            if(min<10) minutes.innerHTML = "0"+min.toString()
            else minutes.innerHTML = min.toString() 
        }
        if(sec<10) seconds.innerHTML = "0"+sec.toString()
        else seconds.innerHTML = sec.toString() 
    }, 1000); 
}

const stopWatch = () => {
    console.log("hi")
    clearInterval(time)
}

const resetStopWatch = () => {
    clearInterval(time)
    hour = 0
    sec = 0
    min = 0
    seconds.innerHTML = "00"
    minutes.innerHTML = "00"
    hours.innerHTML = "00"
}
