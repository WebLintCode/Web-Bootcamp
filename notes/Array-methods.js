- Array Methods

var arr = [2,5,8,10,25]; // [6 , 15 , 24 , 30 , 75]
	var stevenArray = [];

	console.log('before : ' , stevenArray); // []

	for(var i = 0; i < arr.length; i++){
		stevenArray.push(arr[i] * 3);
	}

	console.log('after : ' , stevenArray); // [6 , 15 , 24 , 30 , 75]

----------------------------------------------------------------
map()

var arr = [2,5,8,10,25]; 

	var stevenArray = arr.map(function(value){
		return value * 5;
	});

	console.log(stevenArray); // [10, 25, 40, 50, 125]
----------------------------------------------------------------
filter()
var arr = [2,5,8,10,25 , 9]; 

	var stevenArray = arr.filter(function(value){
		return value < 10;
	});

	console.log(stevenArray); // [1,5,8,9]

-------------------------------------------------------------
find()

var arr = [2,5,8,10,25 , 9]; 

	var myNumber = arr.find(function(value){
		if(value === 8){
			return value;
		}
	});
console.log(myNumber); // 8
-------------------------------------------------------------

	// Object Literal
	var credentials = {
		username: "steven",
		password: "123abc",
		age: 20
	}

	// JSON  Javascript Object Notation
	var authorized = {
	   "authorized": "Yes",
	   "code": "246xyz",
	   "someproperty": 2080
	}