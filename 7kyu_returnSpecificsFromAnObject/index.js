// Instructions:

// Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.
// array should return numbers first then all the method names in the order they are in the object
// strings, booleans, arrays should be ignored.
// if the object is empty, then the array should return the following string: The Object is Empty


// My Answer:

function returnSpecifics(obj) {
    var answer = [];
    var keys = Object.keys(obj);
    var values = Object.values(obj);
    var skip = [];

    for (let i = 0; i < values.length; i++) {

        if (typeof values[i] === "number") {
            answer.push(values[i])
        }
        else if (typeof values[i] === "function" || typeof values[i] === "string" || typeof values[i] === "boolean") {
            skip.push(values[i])
        }
        else {
            console.log("The Object is Empty")
        }
    }

    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] === "function") {
            answer.push(keys[i])
        }
        else if (typeof values[i] === "number" || typeof values[i] === "string" || typeof values[i] === "boolean") {
            skip.push(values[i])
        }
    }
    return answer
}


let obj = {
    a: 1,
    b: 'str',
    c: 2,
    d: true,
    e: function (a) { return a; },
    f: 3
}
// [1, 2, 3, 'e']

returnSpecifics(obj)


  // Best Practice: