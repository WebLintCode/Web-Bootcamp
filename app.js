/*  Question 1 */
 
var age = 20;

if(age <=20){
	console.log('You are allowed to drink')
}else{
	console.log('You are not allowed to drink')
}


/*  Question 2 */

arr[arr.length - 1]


// arr = [2,4,8,9,20];
// for(var i = 0; i < arr.length; i++){
// 	console.log(arr.length - 1)
// } 


/* question 3 */



var arr = [2,5,7,13,10];
	
function sumOfElements(arr){

	var sum = 0;

for( var i = 0; i < arr.length; i++){
		sum += arr[i];
 	}
 	return sum;
 }
console.log(sumOfElements(arr)); 




/* question 4 */

var arr = [2,5,7,9,20,13,30];

function sumOfElements(arr){

	var sum = 0


for(var i = 0; i < arr.length; i++){
		

		if (arr[i] === 7){
			continue;
		}else{
			sum += arr[i];
		}
		
	}
	return sum;
}

console.log(sumOfElements(arr))


/* question 5 */

// var arr = [2,5,8,13,10,21];

// var num = 13;

// function findIndex(arr,num){
	
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] !== num ){

// 		return arr.indexOf(13);

// 		}else{
// 			return "The element number 13 doesn't belong to the array "
// 		}

// 	}

// }

// console.log(findIndex(arr,num))


var arr = [2,5,8,13,10,21];

 var num = 13;

function findIndex(arr,num){
	if(arr.indexOf(num)!== -1){
		return arr.indexOf(num);
	}else{
		return 'The element' + 13 + "doesn't belong to the array";
	}
}

console.log(arr,13)


/* question 6 */

var arr = [2,5,8,13,4,11];

function sumOfEvenNumbers(arr){

	var sum = 0

for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0	){
			sum += arr[i]
		} 
	}
		
return sum;
}

console.log(sumOfEvenNumbers(arr))
/* question 7 */

// var arr = [2,6,10,5,8,20];

// function sumOfEvenNumbers(arr){
// 	var sum = 0 
	
// 	for(var i = 0; i < arr.length; i++){
// 		if(arr[i] === 5){
// 			break;
// 		}else{
// 		sum += arr[i];
// 		}
// 	}
// 	return sum;
// }
// console.log(sumOfEvenNumbers(arr))

var arr = [2,6,10,5,8,20];

function sumOfEvenNumbers(arr){
	var sum = 0 
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			sum += arr[i];
		}else{
		break;
		}
	}
	return sum;
}
console.log(sumOfEvenNumbers(arr))




/* question 8 */

var person = {
	name: 'Mike',
	age: 20,
	hobby: 'Music',
	sport: 'Soccer'
}


console.log(Object.keys(person))



/* question 9 */



/* question 10 */


var n = 4;
function print(n) {
	if( n <= 4){
		console.log("**** ")
	}
}
console.log(print(n))