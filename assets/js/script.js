// timer funcitonality

let num = 60;

function printNumber () {
    let numElement = document.createElement('div');
    numElement.textContent = num;
    document.body.appendChild(numElement);

    // conditional statement that stops the setInterval helper funciton when num is 0

    if (num === 0) {
        clearInterval(interval);
    }

    // subtracts one from num every time the printNumber() is called

    num--;
}

// helper function that takes in two parameters (function you want to run, # of milliseconds between runs)

let interval = setInterval(printNumber, 1000);