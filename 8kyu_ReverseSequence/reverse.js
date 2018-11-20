// Instructions:

// Get the number n (n>0) to return the reversed sequence from n to 1.
// Example : n=5 >> [5,4,3,2,1]


// My Answer:

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