// Question 1
arr[arr.length - 1];

//Question 2

var name = 'Steven'

for(var i = 0; i < 10; i++){
  console.log(name)
}

//Question 3

var age = 30
if(age > 21){
  console.log('You are allowed')
}else{
  console.log('You are not allowed')
}

// Question 4

var arr = [2,5,8,10,12, 3, 20];

for(var i = 0; i <= arr.length; i++){
  if(arr[i] > 9){
    console.log(arr[i])
  }
}


//Question 5



var person = {
    name: 'John',
    age : 30
    }
    
    person.hobby = "Music";
    
    console.log(person)
    
    //Question 6


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
  for(var i = 0; i < arr.length; i++){
      if(arr[i].hobby === 'music'){
          console.log(arr[i].favoriteColors)
      }
  }
 
  //Question 7

  var arr = [3,8, 20, 7 , 13 , 15 , 21];

for(var i = 0; i < arr.length; i++){
	if (arr[i] === 7){
		break;
	}else{
		'Element 7 was not found';
	}
}

console.log(arr[i]);

//Question 8

var arr = [3,8, 10, 50, 20 , 13 ];

var num = 20;

if(arr.indexOf(num)!== -1){
	console.log(arr.indexOf(num));
}  
