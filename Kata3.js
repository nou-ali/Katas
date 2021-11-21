//In this exercise, we will be counting the number of vowels that appear in a given string. 
//For this exercise, consider the following to be vowels: a, e, i, o, and u.


const numberOfVowels = function(data) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < data.length; i++) {
    if (vowels.includes(data[i])) {
      count++;
    }
  }
  return count; 
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
// another solution

const numberOfVowels = function(data) {
 let count = 0;
 const vowels = ["a", "e", "i", "o", "u"];
 for (let sum of data) {
   if (vowels.includes(sum)) {
     count++
   }
 }
 return count; 
};
console.log(numberOfVowels("orange"));

  // new way to do it

  const numberOfVowels = function(data) {
    let sum = 0;
    for(let i = 0; i < data.length; i++) {
      if(data.charAt(i) === 'a' || data.charAt(i) === 'e' || data.charAt(i) === 'i' || data.charAt(i) === 'o' || data.charAt(i) === 'u') {
        sum++;
      }
    }
    return sum;
    };
    console.log(numberOfVowels("orange"));
    console.log(numberOfVowels("lighthouse labs"));
    console.log(numberOfVowels("aeiou"));