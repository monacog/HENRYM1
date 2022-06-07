'use strict'

function BinarioADecimal(num) {
  let numstring= num.toString();
  let suma=0;

  if(typeof num === "number"){
    for (i=0 , j=numstring.length-1; i<numstring.length ; i++ , j-- ){
      suma+=Number(numstring[i])*(2**j);
    }
    return console.log(suma);
  }
  
}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}