function buildSelectUser(){

	var selectTag = document.createElement('select');
	selectTag.setAttribute('id', "userSelectionss");
	selectTag.setAttribute("onchange", "showUserInformation(this.value)");


	document.getElementById('showSelectElement').appendChild(selectTag);

	var ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function(){

			if(ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
				var people = JSON.parse(ajaxRequest.responseText);

				for(var i = 0; i < people.length; i++){
					var userOption     = document.createElement('option');
					var	userOptionText = document.createTextNode(people[i].name);

					userOption.setAttribute("value", people[i].id)
					userOption.appendChild(userOptionText);
					selectTag.appendChild(userOption);
				}

			}
		}
	ajaxRequest.open('GET', 'https://jsonplaceholder.typicode.com/users/', true);
	ajaxRequest.send();
}

buildSelectUser();

	function showUserInformation(optionSelected){

		var ajaxRequest = new XMLHttpRequest();

		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
				var person = JSON.parse(ajaxRequest.responseText);

				document.getElementById('info').innerHTML =  person.website;

			}
		}

		ajaxRequest.open('GET', 'https://jsonplaceholder.typicode.com/users/' + optionSelected, true);
		ajaxRequest.send();
	}
