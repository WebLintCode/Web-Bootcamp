# Ajax API Calls
1) Use the following API: 'https://jsonplaceholder.typicode.com/users/'
2) In your index.html you have 2 divs. First div is going to be used so you can add your select element to it. Second div will be use to display user's email

## Steps:
In app.js create 2 functions

```javascript
a) Create "buildSelectUser" function. 

    - First of all create a "select" tag element.
        Example: 
            var selectTag = createElement('select');
    - Now set an id to your selectTag element. Example:

        selectTag.setAttribute('id', "userSelection");
    - Now set an event like this:
        
        selectTag.setAttribute("onchange", "showUserInformation(this.value)");
    
    - In this function you must execute an ajax call to get list of users from provided API, then once you get a response create option element for each user.        
        
    Example:  
           var userOption = document.createElement('option');

    - Now below 'option' element add the name of each user.
       Example:
           var	userOptionText =  document.createTextNode(...name...);

    - Now below this make sure to add "value" attribute to each "option" and the value should be equal to the id of each user. 
        Hint: You can use setAttribute.
        Example: 
                userOption.setAttribute("value", ...userid...);

    - Now, don't forget to append your userOptionText to your userOption, then append your userOption to your selectTag element.

    - That should be all for this function.
    
    NOTE: Don't forget to execute this function so it get's call in the beginning of your program.
```

```javascript

 b) Create "showUserInformation" function. This function should take one parameter (This parameter is the value selected from one of the options). Hint: This value is going to be used in your Ajax call.
    
    - Create an Ajax call to get information about selected user. Your API address your look like this:

        'https://jsonplaceholder.typicode.com/users/' + optionSelected

    - optionSelected is the parameter (the value of the selected option).

    - Finally once you get a response simply display his/her website on the page.
        
        Example:
            document.getElementById('info').innerHTML = website from user.
```

