const conditionalSum = function(values,condition) {
  let i = 0; // works with i
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    if(condition === 'even' && values[i] % 2 === 0){
      sum += values[i];
    } else if (condition === 'odd' && values[i] % 2 === 1){
      sum += values[i];
    }
  }
  return sum; 
};


console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// While loop solution
const conditionalSum = function(values, condition) {
  if(values.length === 0) return 0;

  let i = 0;
  let sum = 0;

  while(i < values.length){
    if(condition === 'even' && values[i] % 2 === 0){
      sum += values[i];
    } else if (condition === 'odd' && values[i] % 2 === 1){
      sum += values[i];
    }
    i++;
  }
  return sum; 
};
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));

