var element = document.getElementById('info');

element.innerHTML = "David";
element.style.color = 'red';
element.style.backgroundColor = 'yellow';


element.addEventListener("mouseover", function(){
	element.style.backgroundColor = 'green';
});