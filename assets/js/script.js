
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


// VARIABLE DECLARATION SECTION

    // assigns the div with the ID of 'questionContainer' from index.html to the variable questionSection
    const questionSection = document.getElementById('questionContainer');
    // initializes variable questionIndex to equal 0 - to start on the first question
    const startButtonEl = document.getElementById('startButton');
    const startScreenEl = document.getElementById('startScreen');
    var divEl = document.querySelector("#dynamic-timer");

    let questionIndex = 0;
    // 60 is hard coded into the html as the starting value for the timer 
    let num = 3;






// TIMER FUNCTIONALITY
// function with no parameters that dynamically prints num to html and subtracts 1 from num each time it runs
function printNumber () {
        // selects the html element with id of dynamic-timer
        // creates variable timerNowEl and creates an html element with .createElement("span")
    var timerNowEl = document.createElement("span");
        // appends the innerHTML of divEl with the value of num
    divEl.innerHTML = num;

    // subtracts one from num 
    num--;

    //checks if time ran out and runs endOfQuiz() if so
    if (num <= 0) {
        endOfQuiz()
    }
}









//QUESTION GENERATION SECTION
// function that displays question and options dynamically by selecting an array item and generating HTML
function displayQuestion(qIndex){

                    //     <section id="questionContainer">
                    //     <div class="question">
                    //         <h1></h1>
                    //     </div>
                    //     </section>


    // SECTION THAT PRINTS QUESTION

    // creates div and assigns to variable questionDiv
    const questionDiv = document.createElement('div');
    // creates h1 and assigns to variable questionH1
    const questionH1 = document.createElement('h1');
    // assigns the textContent of questionH1 variable to the content of quizQuestions.[qIndex].title
    questionH1.textContent= quizQuestions[qIndex].title;
    // assigns the class of 'question' to the questionDiv - links to CSS styling
    questionDiv.setAttribute('class', "question");
    // appends questionH1 to the questionDiv
    questionDiv.append(questionH1);
    // appends questionDiv to questionSection
    questionSection.append(questionDiv)

                        // print questions
                    //<div class="answer">
                        // <div class="option">
                        //        <button type="button" onclick="FUNCTIONALITY-HERE">
                            //          Option 1 Lorem, ipsum.
                            //      </button>
                            //  </div>

    // SECTION THAT GETS POSSIBLE ANSWERS FROM ARRAY AND PRINTS THEM DYNAMICALLY

    // creates variable optionDivContatiner and creates a div inside of it - locally scoped inside of the function displayQuestion
    const optionDivContainer = document.createElement('div')
   
    // for loop that will iterate over the quizQuestions array by the qIndex function parameter and generate HTML as long as 'i' is less than the length of quizQuestions.choices
    for(let i = 0; i < quizQuestions[qIndex].choices.length; i++){
        // creates variable optionDiv and creates a div inside
        const optionDiv = document.createElement('div')
        // creates variable optionButton and creates HTML button inside
        const optionButton = document.createElement("button")
        // assigns quizQuestions[qIndex].choices[i] as the text content of variable optionButton
        optionButton.textContent= quizQuestions[qIndex].choices[i];
        // assigns the class of 'answer' to the variable optionDivContainer - styling class
        optionDivContainer.setAttribute('class', 'answer')
        //assigns the class of 'option' to the variable optionDiv
        optionDiv.setAttribute('class', 'option')
        // assigns the type 'button' to the var optionButton (which contains an HTML button)
        optionButton.setAttribute('type', 'button')
        // appends the contents of optionButton to var optionDiv
        optionDiv.append(optionButton)
        // appends contents of optionDiv to optionDivContainer
        optionDivContainer.append(optionDiv)
        
    }

    // appends the generated optionDivContainer with all its contents to the var questionSection (which targets ID questionContainer in the HTML)
    questionSection.append(optionDivContainer)

}



//function that passes the variable 'questionIndex' as the parameter.  Prints question and answer options dynamically
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

startButtonEl.onclick = beginQuiz;



function beginQuiz() {

    // helper function that takes in two parameters (function you want to run, # of milliseconds between runs)
    // runs printNumber() every second
    interval = setInterval(printNumber, 1000);

    startScreenEl.setAttribute('class', 'hide')
    questionSection.classList.remove("hide")


    // transition from start screen
    // show questions
    // start the timer
}  

function clickOnQuestion() {

    


    // checks if user input is wrong or right
    // penalizes them by removing time from the clock and shows new time
    // shows 'Right' or 'Wrong' at the bottom based on user selection
    // goes to next question
}

function getQuestionFromArray() {
    // pulls question from array and prints it to display
    // iterate over the array to display all the questions consecutively
}

function highScoreStorage() {
    //displays high score


}



function endOfQuiz() {

    clearInterval(interval);

}







