
let  titleArr = ["this the first string"," this is second string", "this is the third string"]

const stringCutter = str => {
    let halfStr =   `${str.slice(0,str.length/2)}...`;
    if(str.length >= 6 ){
        return halfStr
    } else {
        return str
    }

}

let titleCompress = titleArr.map(eachTitle => {return stringCutter(eachTitle) });
console.log(titleCompress)


