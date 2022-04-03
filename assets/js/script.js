// timer funcitonality

// 60 is hard coded into the html as the starting value
let num = 59;

// function that dynamically prints num to html and subtracts 1 from num each time it runs
function printNumber () {
        // selects the html element with id of dynamic-timer
    var divEl = document.querySelector("#dynamic-timer");
        // creates variable timerEl and creates an html element with .createElement("span")
    var timerNowEl = document.createElement("span");
        // appends the innerHTML of divEl with the value of num
    divEl.innerHTML = num;
        // conditional statement that stops the setInterval helper funciton when num is 0
    if (num === 0) {
        clearInterval(interval);
    }
     // subtracts one from num 
    num--;
}

// helper function that takes in two parameters (function you want to run, # of milliseconds between runs)
// runs printNumber() every second
let interval = setInterval(printNumber, 1000);


