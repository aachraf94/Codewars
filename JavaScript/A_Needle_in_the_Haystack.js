function findNeedle(haystack) {
    // your code here
    
    let trouv = false ;
    let i =0;
    while ((!trouv) && (i<haystack.length))
      {
        if (haystack[i] == "needle")
          {
            return "found the needle at position " + i ;
          }
        else //test
          {
            i++;
          }
      }
    
  }