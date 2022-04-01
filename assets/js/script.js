// timer funcitonality

let num = 60;

function printNumber () {
    // selects the html element with id of dynamic-timer
    var divEl = document.querySelector("#dynamic-timer");
    // creates variable timerEl and creates an html element with .createElement("")
    var timerEl = document.createElement("span");
    // sets text content of timerEl with the value in the variable num
    timerEl.textContent = num;
    // appends the contents of timerEl as a child to the div targeted with devEl variable
    divEl.appendChild(timerEl);
    // conditional statement that stops the setInterval helper funciton when num is 0
    if (num === 0) {
        clearInterval(interval);
    }
    // subtracts one from num every time the printNumber() is called
    num--;
}

// helper function that takes in two parameters (function you want to run, # of milliseconds between runs)

let interval = setInterval(printNumber, 1000);