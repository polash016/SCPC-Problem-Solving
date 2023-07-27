//Problem 1
const reversedString = (str) => {
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
}
return reversed
}

const str = "hello world"
// console.log(reversedString(str))

//Problem 2
const sumPositiveNumbers = (arr) => {
    let add = 0;
    for(num of arr){
        if(num > 0){
           add =  num + add
        }
    }
    return add;
}

const arr = [10, -4, 5, -10, 8, -13, 7, -45]
// console.log(sumPositiveNumbers(arr))

