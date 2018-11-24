// Instructions:

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// ex: Input: 21445 Output: 54421


// My Original Answer:

// function descendingOrder(nums){
//  nums = nums.toString()
//   let splitNums = nums.split('')
//   splitNums.sort().reverse();
//   let reverseSplitNums = splitNums.join('')
//   reverseSplitNums=parseInt(reverseSplitNums)
//   return reverseSplitNums
// }


// My Final Answer:

let descendingOrder = nums => parseInt(nums.toString().split('').sort().reverse().join(''))


// Best Practice:

// function descendingOrder(n){
//   return parseInt(String(n).split('').sort().reverse().join(''))
// }