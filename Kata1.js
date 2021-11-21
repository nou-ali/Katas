//In this exercise, we will be given an array(one array) of 2 or more numbers. 

//We will then have to find the two largest numbers in that array, and sum (add them together) them together.

// Code
const sumLargestNumbers = function(data) {
  let largestNumbers = [0,0];
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNumbers[0] && data[i] > largestNumbers[1]) {
      largestNumbers[0] = largestNumbers[1]
      largestNumbers[1] = data[i]
  } else if (data[i] > largestNumbers[0]) {
    largestNumbers[0] = data[i]
  } 
  }
  return largestNumbers[0] + largestNumbers[1]; 
}
console.log(sumLargestNumbers([10, 2, 34, 6, 92, 4]));

