
// Directions:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// Example:
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

// My Answer:

function abbrevName(name) {
    let nameArray = name.split(' ');
    let initials;
    let newArray = [];

    nameArray.map((eachName, index) => {
        initials = eachName[0];
        newArray.push(initials)

        if (index === 0) {
            newArray.push('.')
        }

    })
    return newArray.join("").toUpperCase();
}