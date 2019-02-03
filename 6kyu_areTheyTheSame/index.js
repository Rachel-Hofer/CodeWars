// Instructions:

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) 
// that checks whether the two arrays have the "same" elements, with the same multiplicities. 
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.



// My Answer:

function comp(array1, array2) {
    let score = [];
    let array1Squared = array1.map(x => x * x);
    array1Squared.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);

    for (let i = 0; i < array1Squared.length; i++) {
        if (array1Squared[i] === array2[i]) {
            score.push("true")
        }
        else {
            return false
        }
    }
    if (score.length === array1Squared.length) {
        return true
    }
}

let array1 = [121, 144, 19, 161, 19, 144, 19, 11];
let array2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
comp(array1, array2);