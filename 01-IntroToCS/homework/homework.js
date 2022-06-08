'use strict'

function BinarioADecimal(num) {
  let numstring= num.toString();
  let suma=0;

  if(typeof num === "number"){
    for (i=0 , j=numstring.length-1; i<numstring.length ; i++ , j-- ){
      suma+=Number(numstring[i])*(2**j);
    }
    return suma;
  }
  
}

function DecimalABinario(num) {
  if(typeof num !== "number"){

    return console.log(parseInt(num).toString(2));
   }else{
     return num.toString(2);
 
   }
 
   /*
   //Alternativa 
   let suma= new String();
 
     while (num>0){
       if(num>1){
         suma+=(num%2).toString();
         num= Math.floor(num/2);
       }else if(num===1){
        suma+="1";
         num=0;
       }
     }
  
     console.log(Number((suma.split("").reverse()).join("")));
 */

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}