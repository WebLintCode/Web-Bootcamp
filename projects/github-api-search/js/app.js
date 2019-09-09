var usersList = document.createElement('ul');

function showUsers(){
    alert('show users');
 /* 
    1) You need to loop through array and then extract user picture
        Example: arr[i].avatar_url
    2) You'll have to create a 'li' element so you can then add <img /> tag to it.
        Example: userElement =  document.createElement('li');
    3) Inside each <img /> you'll have to concate your image within each <img />
        Example: ' <img src="' + arr[i].avatar_url+ '"/>';
    4) Make sure you set each <img/> to your li element
        Example: userElement.innerHTML = ' <img src="' + arr[i].avatar_url+ '"/>';
    5) make sure to use appendChild to append your userELemnt to the List
        Example: usersList.appendChild(user);

    6) Do similar process to extract number of Followers from each user 
        Example: arr[i].followers_url.length
        - Create element 'p', then append this element to the 'li' element.
    7) In order to see your users in the page DON'T FORGET to add your usersList element to the 'displayUsers' element
      Example: document.getElementById('displayUsers').append(usersList);
 */
}

function beginSearch(){
    alert('begin search');
    /*
    1) Get value entered from user in input box field. 
    2) Loop through your array to check if the value entered is an exisiting user in your array
        // Example: 
        if (arr[i].login === userInput) {
            usersList.innerHTML = ''; // This will clear out all of the 'li' present elements
            // Yes the value entered is an existing user!!
            ....
            ....
            return;
        } 
    3) If the user is in the array then do the same steps as what you did for function showUsers
        - Create 'li' element, then add user image to each li by uinsg <img/>
        - Finally add your userElement to your userList.
            Example: usersList.appendChild(user);
    4) Now, if user was not found in the array then simple alert this message:
            alert("User not found");
    */
}