console.log("linked correctly")

var questions = document.getElementById("questions");

var start = document.getElementById("start");

var answers = document.getElementById("choices");
var submit = document.getElementById("submit");

var initials = document.getElementById("initials");
var result = document.getElementById("feedback");

var timer = document.querySelector(".time");

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;




var questions = [
    {
        title: "What symbol do you use for jQuery?",
        choices: ["$", "%", "&", "@"],
        answer: "$"
      },
      {
        title: "You can manipulate html using javascript and jQuery",
        choices: ["True", "False"],
        answer: "True"
      },
      {
        title: "How could you run an array?",
        choices: ["create a function", "link to outside source", "create a for loop"],
        answer: "create a for loop"
      },

      {
        title: "What is a method to print the function",
        choices: ["run()", "print.function()", "console.log()"],
        answer: "console.log()"
      },

      {
        title: "What command would you use to pull from an API?",
        choices: ["API.run", "Ajax", "console.log()"],
        answer: "Ajax"
      },
    
];


function begin() {
 
  var beginning = document.querySelector("#headline");
  beginning.style.display = "none";
  start.style.display = "none";

  console.log("working")

  // start timer
  //timerId = setInterval(clockTick, 1000);

  // show starting time
 // timerEl.textContent = time;

  getQuestions();
};

function getQuestions(){
  var qOne = questions[currentQuestionIndex];

  var title1 = document.getElementById("question-title");
  title1.textContent = qOne.title;
  answers.innerHTML = "";
  
qOne.choices.forEach(function(choice, i) {
   
      var chbtn = document.createElement("button");
      chbtn.setAttribute("class", "choice");
      chbtn.setAttribute("value", choice);
      chbtn.setAttribute("class", "btn btn-primary btn-sm");
      chbtn.style.margin = "10px";
  
      chbtn.textContent = i + 1 + ". " + choice;
  
      chbtn.onclick = questionClick;
  
      answers.appendChild(chbtn);
    });


}


 function questionClick(){
    if (this.value !== questions[currentQuestionIndex].answer){
        alert("wrong!")
    }
    else {
        alert("Right!")
    }

    currentQuestionIndex++;

    if (currentQuestionIndex === questions.length) {
        quizEnd();
      } else {
        getQuestions();
      }
    }
    
    start.addEventListener("click", start);
  


start.onclick = begin

