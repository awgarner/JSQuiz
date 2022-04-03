// timer funcitonality

    // 60 is hard coded into the html as the starting value
    let num = 59;

    // function that dynamically prints num to html and subtracts 1 from num each time it runs
    function printNumber () {
            // selects the html element with id of dynamic-timer
        var divEl = document.querySelector("#dynamic-timer");
            // creates variable timerNowEl and creates an html element with .createElement("span")
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

// Pseudocode of Remaining Functionality:

    // 1. When I click the Start Button:
        // a. Move to question page
        // b. Start timer coutdown
        // c. Dynamically generate questions from JS
        // d. Dynamically generate answers from JS

    // 2. When I click an answer: 
        // a. Conditional statement that evaluates the selection
            // if CORRECT, then:
                // display 'Correct!'
                // genterate next question
            // if WRONG, then:
                // display 'Wrong!'
                // subtract time from clock
    // 3. When all quesitons are answered OR timer reaches 0:
        // a. remove questions and buttons to be replaced with:
            // -"All Done"
            // -"Your final score is NUMBER HERE (remaining time)"
            // -"Enter initials" in an input
            // submit button 
    // 4. Submit button takes you to high score page which:
        // a. displays all stored high scores in descending order, including your most recent score
        // b. header and timer are gone

// array that will hold the questions:





