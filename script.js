let inp = document.getElementsByClassName("inp")
let result = document.querySelector("#time-markers")
// function show() {
//     result.classList.toggle("show")
// }

let secs;
let hrs;
let mins;
function myFun() {
    let x = inp[0].value
    console.log(x);
        let y = String(x)
    if (y.length == 1){
        secs = Number(y)
        mins = 0
        hrs = 0
    }else if(y.length == 2){
        secs = Number(y)
        mins = 0
        hrs = 0
    } else if(y.length == 3 ){
        mins = Number(y[0])
        secs = Number(y[1] + y[2])
    }
    
    else if (y.length == 4) {
        mins = Number(y[0] + y[1])
        secs = Number(y[2] + y[3])
        hrs = 0
    }else if(y.length == 5){
        hrs = Number(y[0])
        mins = Number(y[1] + y[2])
        secs = Number(y[3] + y[4])

    }

    else if (y.length == 6) {
        hrs = Number(y[0] + y[1])
        mins = Number(y[2] + y[3])
        secs = Number(y[4] + y[5])
    }

    if(secs >= 60){
        mins += 1
        secs -= 60

    }
    if(mins >= 60){
        hrs += 1
        mins -= 60

    }

    // if (inp.style.display == "none") {
    //     result.style.display = block
    // }
    // if (inp.style.display == "block") {
    //     result.style.display = none
    // }
    // if (result.style.display == "none") {
    //     result.style.display = block
    // }
    // if (result.style.display == "block") {
    //     result.style.display = none
    // }
    result.innerText = `${hrs} h${mins} m ${secs} s `

    
    console.log("s : " + secs);
    console.log("m : " + mins);
    console.log("h : " + hrs);
    console.log(typeof(secs));
    console.log(typeof(mins));
    console.log(typeof(hrs));

    inp.value = 0

}
let time = document.querySelector(".time")
let strbtn = document.querySelector("#start")
let stpbtn = document.querySelector("#stop")
let rstbtn = document.querySelector("#reset")
let milli = document.querySelector(".ms")

let xtime = 0
let interval = null
function timer() {
    xtime++;
    let hours = Math.floor(xtime / 3600);
    if (hours < 10) {
        hours = "0" + hours
    }
    let minutes = Math.floor(xtime % 3600 / 60);
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    let seconds =  Math.floor(xtime % 3600 % 60);
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    time.innerHTML = `${hours} <span>  h  </span>  ${minutes} <span> m </span> ${seconds} <span> s </span> `
}

function counter() {
    if (interval) {
        return
    }
    interval = setInterval(timer, 1000)
}

let mss = 0
let msinterval = null


function ms() {
    if (mss < 100) {
        mss++
    }else if(mss == 100){
        mss = 0
    }
    milli.textContent = `${mss}`
}
function msss() {
    if (msinterval) {
        return
    }
    msinterval = setInterval(ms, 10);
}

function stop() {
    clearInterval(interval)
    clearInterval(msinterval)
    interval = null;
    msinterval = null;
}

function reset() {
    stop()
    xtime = 0
    mss = 0
    time.innerHTML = `00 <span>h </span>00 <span>m </span>00 <span>s</span>`
    milli.textContent = `00`

}
