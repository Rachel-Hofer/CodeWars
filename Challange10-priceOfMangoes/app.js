// Instructions

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
// For a given quantity and price (per mango), calculate the total cost of the mangoes.

// mango(3, 3) ==> 6    # 2 mangoes for 3 = 6; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for 5 = 30; +3 mangoes for free

// My Answer:

function mango(quantity, price){
    let forFree = quantity/3;
    let remainder = quantity % 3
    let actualQuant = quantity - forFree;
    let newPrice = actualQuant * price;
    if(quantity % 3 === 0){
      return newPrice
    } 
    else {
      let newNum = quantity - remainder;
      let updatedFree = newNum/3;
      let updatedQuant = quantity - updatedFree;
      let updatedPrice = updatedQuant * price;
    
      return updatedPrice
    }
  }

  // Best Practice:

//   function mango(quantity, price){
//     return price * (quantity - Math.floor(quantity / 3));
//   }
