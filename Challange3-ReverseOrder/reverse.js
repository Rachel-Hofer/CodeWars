const reverseSeq = n => {
    return [...Array(n+1).keys()].slice(1, n+1).reverse();
  };