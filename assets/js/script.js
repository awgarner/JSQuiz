// timer funcitonality

let num = 60;

function printNumber () {
    let numElement = document.createElement('div');
    numElement.textContent = num;
    document.body.appendChild(numElement);
    num--;

}

// helper function that takes in two parameters (function you want to run, # of milliseconds between runs)

setInterval(printNumber, 1000);