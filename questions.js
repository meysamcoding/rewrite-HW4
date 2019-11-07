 


var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["alerts", "booleans", "strings", "numbers"],
        Correct: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes","parentheses", "curly brackets",  "square brackets"],
        Correct: "parentheses"
    },
    {
        title: "Arrays in javaScript can be used to store_____?",
        choices: ["number ", "letter" , "all of them", " boolean"],
        Correct: "all of them"
    },
    {
        title: "String values must be enclosed within_____ when being assigned to variables.",
        choices: ["commas", "quotes", "parentheses" , "curly brackets"],
        Correct: "curly brackets"
    },
     
    {
        title: "How do you create a for in JavaScript?",
        choices: ["for", "for loop", "if loop", "loop" ],
        Correct: "for loop"
    }];


 
    for(var i =0; i< questions.length ; i++){

        console.log(questions[i].choices);
       var list = questions.choices;

       for (var property in list) {
        console.log(property);
    
    }
             
         }
        //  $("#choices").val(parsed); 
  

 