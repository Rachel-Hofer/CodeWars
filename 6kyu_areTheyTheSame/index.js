// Instructions:

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


// My Answer:

function comp(array1, array2) {
    if (array1 === undefined || array1 === undefined) {
        return false
    }

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

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
comp(a1, a2);



// Best Practice:

function comp(array1, array2) {
    if (array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

