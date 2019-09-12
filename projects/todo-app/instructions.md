# TODO APP
1) Create 2 folders for your project (Example: js and css )
2) Create an index.html for your project.
3) Create an app.js file inside your js folder.
4) Create a style.css file inside your css folder.
5) Make sure to call your external files from index.html

## Steps:

a) In your index.html create an input field to allow user to enter a Text.

    Example:
```html
    <input type="text" onkeypress="hdlonkeypress(event)" id = "userinput">
    <button onclick="getUserInput(event)">Add</button>

    <div id="info"></div>
```
b) Inside your app.js file create 2 functions:

    b.1) getUserInput
        - Inside this function make sure to get user's input entered in input field

            Example: 
```javascript
              document.getElementById('userinput').value;
```
        - Create and element "li" so that you can append a text and a button to this "li" element
        - Inside this function use the addEventListener to delete "li" elements
         Example; 
```javascript
                mybutton.addEventListener('click', function(){
                    myList.removeChild(element);
                });
```      
        - NOTE: In this function you must check that if input field is empty we shouldn't add any element to our list.

    b.2) hdlOnKeypress. This function should take the "event" parameter so you can use keyCode inside your function    
            Example:
```javascript
            var x = event.keyCode;

            - If user presses on "Enter" button (event.keyCode === 13), then call getUserInput function.
```

c) Finally make sure to style your "li" elements and delete buttons using some CSS.

