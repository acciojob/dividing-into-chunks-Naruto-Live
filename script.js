const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let sum = 0;
let result = []
let chunk = []

const divide = (arr, n) => {
  for( let i = 0 ; i < arr.length; i++ ) {
	let num = arr[i];
	  if( sum + num <= n ) {
		  chunk.push(num);
		  sum += num;
	  } else {
		result.push(chunk);
		  chunk = [num];
		  sum = num;
	  }
  }
	result.push(chunk);
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
