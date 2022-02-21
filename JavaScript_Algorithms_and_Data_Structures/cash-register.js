function checkCashRegister(price, cash, cid) {

  const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
  }

  let change = cash*100 - price*100;
  let originalChange = change;
  let outputChange = [];
  let outputStatus = "";

  //We filter the cid array to discard values ​​that have 0. Then we reverse it.
  let cidSum = 0;
  let filteredCid = cid.filter(elem => elem[1] != 0).reverse();

  
  //We go through each element of the filtered cid array and we add to the "amount" variable the amount that we must load in the "outputChange" array.
  filteredCid.forEach(elem => {
    let currency = elem[0];
    let currencySum = elem[1]*100;
    cidSum += currencySum;
    let amount = 0;
    while(change >= currencyUnit[currency] && currencySum > 0){
      amount += currencyUnit[currency];
      change -= currencyUnit[currency];
      currencySum -= currencyUnit[currency];
    }
    if (amount !== 0){
      outputChange.push([currency, amount/100]);
    }
  });


// We check if the "change" variable is greater than, equal to or less than 0. Depending on that condition, the function will return "insufficient funds", "closed" or "open". In the last 2 cases, it will also return the change.
  if (change > 0){
    outputStatus = "INSUFFICIENT_FUNDS";
    outputChange = [];
  }
  else if(change == 0 && originalChange == cidSum){
    outputStatus = "CLOSED"
    outputChange = cid;
  }
  else{
    outputStatus = "OPEN";
  }

  return {"status": outputStatus, "change": outputChange}
}



checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);