// Instructions:

// Your task is to sort a given string. 
// Each word in the string will contain a single number. 
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.
// ex: Test.assertEquals(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")


// My Original Thought Process:

// function order(words){
//   let array = words.split(" ");
//   console.log("the array", array)
  
//   for(var i = 0; i < array.length; i++){
//       console.log("index", i)
//     for(var j = 0; j < array[i].length; j++){
//       console.log(j)
//         if(j === 4 )
//         console.log("I am a number")
//     }
//   }
// }


// My Final Answer:

function order(words) {
	var arr = words.split(' ');
	arr.sort(function(a, b) {
		if (Number(a.match(/\d+/)[0]) < Number(b.match(/\d+/)[0]))
			return -1;
		else if (Number(a.match(/\d+/)[0]) > Number(b.match(/\d+/)[0]))
			return 1
		else
			return 0
	});
	return arr.join(' ');
}
let words = "is2 Thi1s T4est 3a";
order(words);


// Best Practice:

// function order(words){
  
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }  