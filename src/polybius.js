// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

  // you can add any code you want within this function scope

 
const polybiusModule = (function () {
  const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'j': '42', 'i': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };

  const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z', };





  //function with 2 parimters encoder variable defaults to true.
  function polybius(input, encode = true) {
    // if encode is false and the input without spaces is not even, return false(for decryption)
      if (!encode && input.replace(/\s+/g, '').length % 2) return false
    // based on the encode value key value lookup is determined if its encoding or decoding the input.  
    const direction = encode ? encoder : decoder;
    // useing regular expression method to shorten syntax
    // const newArray = input.toLowerCase().match(/[a-z]|(\s+)/g);
    const newArray = input.toLowerCase().match(/[0-9]{2}|[a-z]|\s/g)
    return newArray.map(character => direction[character] || character).join('');
    };
  return {polybius}
})();


 // return {
   // polybius,
  //};

//})();
module.exports = { polybius: polybiusModule.polybius };
 