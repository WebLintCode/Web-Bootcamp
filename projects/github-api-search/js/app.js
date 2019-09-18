var usersList = document.createElement('ul');
var arr = []

function showUsers(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        arr = JSON.parse(this.responseText);
        var info = document.getElementById('displayUsers');
        usersList.innerHTML = ' ';
          for(var i = 0; i < arr.length; i++){
           var element = document.createElement('li');
           var usernameInfo = document.createElement('p');
           var user = document.createTextNode(arr[i].login);

           element.innerHTML = '<img src=' + arr[i].avatar_url +'/>'; 

           usernameInfo.appendChild(user);
           element.appendChild(usernameInfo);
           usersList.appendChild(element);
           info.appendChild(usersList);
           
          }

      }
    
    };
    xhttp.open("GET", "https://api.github.com/users", true);
    xhttp.send();
}
showUsers();
 
function beginSearch(){

    var userInput = document.getElementById('search').value
    for(var i = 0; i < arr.length; i++){
        if(arr[i].login === userInput){
            usersList.innerHTML = ' ';
            var user = document.createElement('li')
            user.innerHTML = '<img src=' + arr[i].avatar_url +'/>';
        
            var usernameInfo = document.createElement('p');
            var username = document.createTextNode(arr[i].login);
        
            usernameInfo.appendChild(username);
            user.append(usernameInfo);
            usersList.appendChild(user);
            return;
        }
        
    }
    alert('user not found');
}


  