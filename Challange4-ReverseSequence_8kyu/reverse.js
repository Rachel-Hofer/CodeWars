const reverseSeq = n => {
    return [...Array(n+1).keys()].slice(1, n+1).reverse();
  };

  //Best Practice:

  // const reverseSeq = n => {
  //   let arr = [];
  //     for (let i=n; i>0; i--) {
  //       arr.push(i);
  //       } return arr;
  //   };