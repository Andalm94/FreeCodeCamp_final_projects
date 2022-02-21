function rot13(str) {
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T" , "U", "V", "W", "X", "Y", "Z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T" , "U", "V", "W", "X", "Y", "Z"];

  let message = [];

  /*
  We create an empty array and check if the elements of the string passed by parameter match any element of the alphabet.
  If it doesn't, the element is passed unchanged.
  */

  for (let i = str.length; i >= 0; i-- ){
    for(let j = alphabet.length-1; j >= 0; j--){
      if(str[i] == alphabet[j]){
        message.unshift(alphabet[j-13]);
        break;
      }
      if(str[i] == " " || str[i] == "!" || str[i] == "." || str[i] == "?"){
        message.unshift(str[i]);
        break;
      }
    }
  }

  return message.join("");
}

console.log(rot13("SERR PBQR PNZC"));
