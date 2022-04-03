
// arrays
var quizQuestions = [
    {
        title: "Common JavaScript data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      },
      {
        title: "Conditions in if / else statement are enclosed in ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },
      {
        title: "JavaScript arrays can store ____.",
        choices: [
          "numbers and strings",
          "other arrays",
          "booleans",
          "all of the above"
        ],
        answer: "all of the above"
      },
      {
        title:
          "String values must be enclosed in ____ when assiging them to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
      },
      {
        title:
          "A great tool for development, debugging, and for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
      }
]

const questionSection = document.getElementById('questionContainer');
let questionIndex = 0;


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


    function displayQuestion(qIndex){
    //     <section id="questionContainer">
    //     <div class="question">
    //         <h1></h1>
    //     </div>
    // </section>

    

    const questionDiv = document.createElement('div');
    const questionH1 = document.createElement('h1');
    questionH1.textContent= quizQuestions[qIndex].title;
    questionDiv.setAttribute('class', "question");
    questionDiv.append(questionH1);
    questionSection.append(questionDiv)

    // print questions
//<div class="answer">
    // <div class="option">
       //        <button type="button" onclick="FUNCTIONALITY-HERE">
        //          Option 1 Lorem, ipsum.
        //      </button>
        //  </div>

        const optionDivContainer = document.createElement('div')
        for(let i = 0; i < quizQuestions[qIndex].choices.length; i++){
            const optionDiv = document.createElement('div')
            const optionButton = document.createElement("button")
            optionButton.textContent= quizQuestions[qIndex].choices[i];
            optionDivContainer.setAttribute('class', 'answer')
            optionDiv.setAttribute('class', 'option')
            optionButton.setAttribute('type', 'button')
            optionDiv.append(optionButton)
            optionDivContainer.append(optionDiv)
        }
        questionSection.append(optionDivContainer)
   
    }

    displayQuestion(questionIndex);
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
                // generate next question
            // if WRONG, then:
                // display 'Wrong!'
                // subtract time from clock
                // generate next question
    // 3. When all quesitons are answered OR timer reaches 0:
        // a. remove questions and buttons to be replaced with:
            // -"All Done"
            // -"Your final score is NUMBER HERE (remaining time)"
            // -"Enter initials" in an input local storage
            // submit button 
    // 4. Submit button takes you to high score page which:
        // a. displays all stored high scores in descending order, including your most recent score
        // b. header and timer are gone



// beginQuiz funcitonality here..

function beginQuiz() {
    // transition from start screen
    // show questions
    // start the timer
}  

function getQuestionFromArray() {
    // pulls question from array and prints it to display
    // iterate over the array to display all the questions consecutively
}

function clickOnQuestion() {
    // checks if user input is wrong or right
    // penalizes them by removing time from the clock and shows new time
    // shows 'Right' or 'Wrong' at the bottom based on user selection
    // goes to next question
}

function endOfQuiz() {
    // 
}







