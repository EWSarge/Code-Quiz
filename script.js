console.log("linked correctly")

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var questions = document.getElementById("questions");
var timer = document.getElementById("time");
var choices = document.getElementById("choices");
var submit = document.getElementById("submit");
var start = document.getElementById("start");
var initials = document.getElementById("initials");
var result = document.getElementById("feedback");


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
        answer: "Ajax)"
      },
    
];


