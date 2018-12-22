let myString = "as long as you hovering here";

const stringCutter = str => {
    let halfStr =   `${str.slice(0,str.length/2)}...`
    str.length >= 6 ? console.log(halfStr):  console.log(str)  
}
stringCutter(myString)

