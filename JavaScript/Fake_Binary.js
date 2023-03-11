function fakeBin(x){

    for (let i =0 ; i<=9 ; i++)
      {
        let str = "" +i;
        if (i<5)
          {
            x= x.replaceAll(str,"0");
          }
        else
          {
            x= x.replaceAll(str,"1");
          }
      }
    
    return x; //return the answer
  }