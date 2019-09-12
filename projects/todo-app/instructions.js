1) Create 2 folder for your project (Example: js and css )
2) Create an index.html for your project.
3) Create an app.js file inside your js folder.
4) Create a style.css file inside your css folder.
5) Make sure to call your external files from index.html

Steps:
b) In your index.html create an input field to allow user to enter a Text.
a) Inside your app.js file create 2 functions
    - getUserInput
        - Inside this function make sure to get user's input entered in input field
            Example: document.getElementById('userinput').value;
        -
    - hdlOnKeypress. This function should take the "event" parameter so you can use keyCode inside your function    
            Example: var x = event.keyCode;
            - If button press by user is "Enter" (event.keyCode === 13), then call getUserInput function.
