const reverseSeq = n => {
    let tab = [];
    
    while (n >= 1) {
      tab.push(n);
      n--;
    }
    
    return tab;
  };