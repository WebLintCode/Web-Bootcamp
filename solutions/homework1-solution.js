//Question 3
var myArray = [1,5,7,10,13];

function sumOfElements(arr)
{
	var total = 0;
	for(var i = 0; i < arr.length; i++){
		total += arr[i]
	}
	return total;
}
console.log(sumOfElements(myArray));


//question 4
var myArray = [1,5,7,10,13];

function sumOfElements(myArray){
	var total = 0;
	for(var i = 0; i < myArray.length; i++){
		if(myArray[i] == 7){
			continue;
		}
		total += myArray[i]

	}
	return total;
}

console.log(sumOfElements(myArray));
//question 6
var arr = [2,5,8,13,4,11]

function sumOfEvenNumbers(arr){
	var sum = 0
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			sum += arr[i];
		}

	}
	return sum;
}
console.log(sumOfEvenNumbers(arr));

//question 7 
var array = [2,6,10,5,8,20]

function sumOfEvenNumbers(array){
	var sum = 0
	for(var i = 0; i < array.length; i++){

		if(array[i] % 2 != 0){
			break;
		}
		if(array[i] % 2 == 0){
			sum += array[i]
		}
	}
	return sum; 
}
console.log(sumOfEvenNumbers(array));

question 8
var person = {
	name:"david",
	age:20,
	hobby:"music"
}
console.log(Object.keys(person));
console.log(Object.values(person));

//question 9
var people = [
	{
	  name:"Peter",
	  age:25,
	  hobby:"soccer"
	},
	{
	  name:"Mary",
	  age:30,
	  hobby:"running"
	},
	{
	  name:"Jon",
	  age:28,
	  hobby:"Music"
	}
]
function findPersonHobby(arr, personName){
	for(var i = 0; i < arr.length; i++){
		if(arr[i].name == personName){
			console.log(arr[i].hobby);
		}
	}
}
findPersonHobby(people, "Mary");

//question 10
function print(n) {
	var output = "";
	for(var i = 0; i < n; i++) {
		output += " *";
	}

	return output;
}

console.log(print(4));


// test

function sum(a , b) {
	return a + b; // 7
}

console.log(sum(2, 5));




