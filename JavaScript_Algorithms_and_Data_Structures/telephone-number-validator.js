function telephoneCheck(str) {
  let isValid = false;
  let regex = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;

  //We create a regular expression that allows various formats of US numbers. Then we validate it with the test method.

  if(regex.test(str) === true){
    isValid = true;
  }
  
  return isValid;
}

telephoneCheck("555-555-5555");

