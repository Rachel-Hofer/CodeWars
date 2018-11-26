// Instructions:

// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"


// My Answer:

function accum(string) {
	let splitString = string.split('')
  let emptyArray = [];
  let multiplyBy = 1;

  for(let i = 0; i < splitString.length; i++){
    if(i === 0){
    var multiply = splitString[i]
    var caps = multiply.charAt().toUpperCase()
    emptyArray.push(caps);
    var stringAgain = emptyArray.join('-')
    } else {
      var multiply = splitString[i].repeat(multiplyBy).toLowerCase()
      var caps = multiply.charAt().toUpperCase()+ multiply
      emptyArray.push(caps);
      var stringAgain = emptyArray.join('-')
      multiplyBy += 1;
    }
}
return stringAgain
}


// Best Practice:

// function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }