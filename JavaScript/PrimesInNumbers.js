/**
 * Primes in numbers
 * Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
 */

function primeFactors(n){
    //your code here
  const PrimeNumbers=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 97,101,10,107,109,113 ,127,131,137,139,149];
	let stop = false;
  let str = "";
  let x = n;
  let cpt = 0;
  let i =0;
  
  while (x>1)
    {
      cpt=0
      while (x%PrimeNumbers[i]==0)
        {
          x= Number.parseInt(x/PrimeNumbers[i]);
          cpt++;
        }
      
      if (cpt >1)
        {
          str+= "("+PrimeNumbers[i]+"**"+cpt+")";
        }
      else if(cpt ==1)
        {
          str+="("+PrimeNumbers[i]+")";
        }
         i++;      
    }
  return str;
}