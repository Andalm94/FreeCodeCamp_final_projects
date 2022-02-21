function palindrome(str) {
  let bool = true;
  let arr = [];
  let j = 0;
  

  //Here we clean the string received as a parameter and convert it into an array
  str = str.toLowerCase();
  str = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  arr = Array.from(str);
  j = arr.length-1;

  

  //We compare the last element with the first successively looking for differences  
  for(let i = 0; i<arr.length/2; i++){
    if(arr[i] != arr[j]){
      bool = false;
    }  
    j--;
  }


  return bool;
}

palindrome("eye");