let inp = document.getElementsByClassName("inp")
let result = document.querySelector("#time-markers")

let secs = 00;
let hrs = 00;
let mins = 05;
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
        hrs = 0
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
    console.log(hrs);
    result.style.display = "block"
    result.style.fontsize = 60;
    if (hrs < 10 && hrs.toString().length == 1) {
        hrs = "0" + hrs
    }
if (mins < 10 && mins.toString().length == 1) {
        mins = "0" + mins
    }
if (secs < 10 && secs.toString().length == 1) {
        secs = "0" + secs
    }
    result.innerHTML = `${hrs} <span>  h  </span>  ${mins} <span> m </span> ${secs} <span> s </span> `
    inp[0].innerHTML = "";
    inp[0].style.display = "none"

   
    
}
let swinterval = null
function downSw() {
    if (secs > 0) {
        secs--
    }else if(secs == 0 && mins > 0){
        secs = 59
        if (mins > 0) {
            mins--

        }else if(mins == 0){
            mins = 0
        }
    }
    if (mins == 0 && hrs > 0) {
        mins = 59
        if (hrs > 0) {
            hrs--
        }
        else{
            hrs = 0
        }
    }
    if (hrs < 10 && hrs.toString().length == 1) {
        hrs = "0" + hrs
    }
if (mins < 10 && mins.toString().length == 1) {
        mins = "0" + mins
    }
if (secs < 10 && mins.toString().length == 1) {
        secs = "0" + secs
    }
    result.innerHTML = `${hrs} <span>  h  </span>  ${mins} <span> m </span> ${secs} <span> s </span> `


}

function mssss() {
    if (swinterval) {
        return
    }
    swinterval = setInterval(downSw, 1000);
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
// console.log("s : " + secs);
    // console.log("m : " + mins);
    // console.log("h : " + hrs);
    // console.log(typeof(secs));
    // console.log(typeof(mins));
    // console.log(typeof(hrs));

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

    // function show() {
//     result.classList.toggle("show")
// }