1)
arr[arr[i].length - 1]
2)

for( var i = 0; i < 11; i++){


	console.log("David");
}
3)

var age = 30

if(age >= 21)
{
console.log("you are allowed to drink")
}
else{
console.log("you are not allowed to drink")
}

4)
var arr = [2,5,8,10,12, 3, 20];

for(var i = 0; i < arr.length; i++){
	if(arr[i] > 9){
		console.log(arr[i]);
	}
}

5)

var person = {
   name: 'John',
   age : 30
}
person.hobby = "soccer";
console.log(person);

6)
var arr = [
   {
      name: 'Mike',
      hobby: 'scoccer',
      favoriteColors: ['red', 'white', 'blue']
   },
   {
      name: 'Laura',
      hobby: 'volleybal',
      favoriteColors: ['brown', 'red', 'orange']
   },
   {
      name: 'John',
      hobby: 'music',
      favoriteColors: ['orange', 'yellow', 'white']
   },
];

function findPersonHobby(arr, personName){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].hobby === 'music'){
			var colors = arr[i].favoriteColors;
			for(var j = 0; j < colors.length; j++){
				console.log(colors[j]);

			}
		}
	}
}

7)

var myArray = [3,8, 20, 7 , 13 , 15, 21];

function sumOfElements(myArray){
	var total = 0;
	for(var i = 0; i < myArray.length; i++){
		if(myArray[i] == 7){
			console.log(myArray[i]);
			break;

		}else{
			console.log("The element 7 was not found");
		}

	}
	
}

8)
var arr = [3,8, 10, 50, 20 , 13 ];

for(var i = 0; i < arr.length; i++){
	if(arr[i] === 20){
		console.log(i);
	}
}