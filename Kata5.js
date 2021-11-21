  const urlEncode = function(text) {
    let trimmedText = text.trim();
    let encoded = '';
    for (let i = 0; i < trimmedText.length; i++) {
      if (trimmedText[i] === ' ') {
        encoded += '%20';
       } else  {
          encoded += trimmedText[i];
        }
      }
      return encoded;
    };
    console.log(urlEncode("Lighthouse Labs"));
    console.log(urlEncode(" Lighthouse Labs "));
    console.log(urlEncode("blue is greener than purple for sure"));

///


const urlEncode = function(text) {
  let trimmedText = text.trim();
  let regex = /\s+/g; 
  return trimmedText.replace(regex, "%20");
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
  
