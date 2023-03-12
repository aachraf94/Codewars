/**
 * Descending Order
 * Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
 */



function descendingOrder(n){
    //...
    
    const str = "" +n;
    const myArray = str.split();
    myArray.sort();
    const str2="";
    for (let i=0 ; i< myArray.legth; i++)
      {
        str2 = myArray[i] + str2;
      }
    
    return Number(str2);
  }