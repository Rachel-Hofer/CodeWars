// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

let operation = ""
let value1 = 0
let value2 = 0

function basicOp(operation, value1, value2){
  let answer = eval(value1 + operation + value2);

  return answer

}
