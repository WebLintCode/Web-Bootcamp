/*  Question 1 */

var age = 20 

if ( age >= 21){
  console.log("You are allowed to drink")
}else 
  console.log('You are not allowed to drink')


/*  Question 2 */

var arr = [2,4,8,9,20]

console.log(arr[arr.length - 1])



/*  Question 3 */

function sumOfElements(arr,total) {

}

var arr = [2,5,7,13,10]; 

for(var i = 0; i < arr.length; i++){
 var total = arr[i] + i
} 
console.log(total)



/*  Question 4 */


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

/*  `Question 5 */
var arr = [2,5,8,13,10,21];

var num = 13;

function findIndex(arr,num){
	
	for(var i = 0; i < arr.length; i++){
		if(arr[i] !== num ){

		return arr.indexOf(13);

		}else{
			return "The element number 13 doesn't belong to the array "
		}

	}

}

console.log(findIndex(arr,num))


/* Question 6 */
var arr = [2, 5, 8, 13, 4, 11];

function sumOfEvenNumbers(arr){
    var sum = 0
for(var i = 0; i < arr.length; i++){
    if( arr[i] % 2 === 0){
        sum += arr[i]
    }
        
}return sum


}console.log(sumOfEvenNumbers(arr))

/* Question 7 */ 
var arr = [2, 6, 10, 5, 8, 20];
function  sumOfEvenNumbers(arr){
   
    var sum = 0
    for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        sum += arr[i]
        }else{ 
         
      break
        }return sum
    }
    }console.log(sumOfEvenNumbers(arr))

/* Question 8 */


var person = {
    name: 'Mike',
    age: 20,
    hobby: 'Music',
    sport: 'soccer'
    }
    var x = []
 
    for( var i in person){
     
    x.push(person[i])
    }
    console.log(x)



/*  Question 9 */ 

function findPersonHobby(arr, personName){


    var arr = [
     {
    name: 'Mike',
    age : 23,
    hobby: 'Dancing'
    },
    {
    name: 'Joe',
    age : 20,
    hobby: 'Music'
    },
    {
    name: 'Peter',
    age : 30,
    hobby: 'Painting'
    }
    ]
    for (var i = 0; i < arr.length; i++) {
      if( "Mike" === personName.hobby ){
        return  arr[i].hobby
      }
    }console.log(arr[i].hobby)



/* question 10 */
var n =4

function print(n){
 
    if(n == 4 ){
    	console.log("****")
}


    }
 

    console.log(print(n))








