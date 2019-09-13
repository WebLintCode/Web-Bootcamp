
// This will set the current year in footer
document.getElementById('currentDate').innerHTML = 'Copyright &copy; ' + new Date().getFullYear() + ' All Rights Reserved';

function submitAnswers(){
    var total = 5; // number of question
    var score = 0; // starting score
    var answers = ["b","a","d","b","d"]; // quiz answers
    
    // Get reference to form
    var myForm = document.forms["quizForm"];

    // Get answer for question 1  by attribute name
    document.forms["quizForm"]["q1"].value;

    // Form Validation
    /* 
    1) You need to loop 5 times so you have access to each question
       Example 
       for(var i = 1; i <= total;i++){

       }
    2) You need to check value from each question by using its index.
        Example:
            myForm["q" + i].value 

    3) If user selected an answer and it matches an anwer from answers array then increase score variable.
       Example: score++  or ++score

    4) Finally display score value by using the results id
       Example: document.getElementById('result')
    */

    return false;
}