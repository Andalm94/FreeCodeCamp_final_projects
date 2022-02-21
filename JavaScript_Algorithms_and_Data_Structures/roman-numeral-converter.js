function convertToRoman(num) {
  
  const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let translatedNumber = "";

  /*
  Explanation: We will check if the number passed as parameter is less than position i of the "decimals" array.
  If it is true, the Roman equivalent is added to the "translatedNumber" array and its decimal equivalent is subtracted
  from the number passed in the parameter until it reaches 0.
  */

  for (let i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      translatedNumber += romans[i];
      num -= decimals[i];
    }
  }

  return translatedNumber;

}

convertToRoman(2136);