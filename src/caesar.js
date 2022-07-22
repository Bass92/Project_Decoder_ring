// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) { return false }; 
    
 //decode
    if(!encode) {
      shift = -shift
    }
    
    const alph = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase().split(''); 
    // to ignore any space or other things,function to letters only 
    return input.map(char => {
      if (!alph.includes(char)){
        return char
      }
            //       each      0   + 3
      let idx = alph.indexOf(char) + shift 
      if( idx < 0) { idx += 26};     
      if( idx > 25) { idx -= 26};
      return alph[idx]   
    }).join("") 
    
   
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
