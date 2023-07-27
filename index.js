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

// Problem 3




// Problem 4

const twoIndexNum= (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const currentSum = arr[left] + arr[right];
  
      if (currentSum === target) {
        return [left, right];
      } else if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null;
  }
  
  // example
  const arr2 = [1, 3, 6, 8, 11, 15];
  const target = 14;
  const result = twoIndexNum(arr2, target);
  console.log(result); 
  
  //Problem 5

  const jsCalculator = (num1, num2, operator) => {

    if(operator === '+'){
        return num1 + num2
    }
    else if(operator === '-'){
        return num1 - num2
    }
    else if(operator === '*'){
        return num1 * num2
    }
    else if(operator === '/'){
        return num1 / num2
    }
    return null;

  }
// console.log(jsCalculator(5,6, '*'))

//Problem 6

const passwordGenerator = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';
    const password = [];
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password.push(characters[index]);
  }
  return password.join("");
}
passwordGenerator(10)
// console.log(passwordGenerator(8))
  
// Problem 7

const romanToInteger = romanString => {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
      };

      let result = 0;
      for(let i = 0; i < romanString.length; i++) {
        const currentNumber = romanString[i];
        const currentValue = romanNumerals[currentNumber];
        const nextNumber = romanString[i+1];
        const nextValue = romanNumerals[nextNumber];
        if(currentValue < nextValue) {
            result = result + (nextValue - currentValue);
            i++;
        }
        else{
            result =  currentValue + result;
        }
      }
      return result;
}

// console.log(romanToInteger('XLII'))

// Problem 8
const secondSmallNumber = arr => {
    if(arr.length < 2){
        return;
    }
    const sortedArr = arr.sort((a,b) => a-b);
    return(sortedArr[1])
}
const array = [56,43,66,25,7868,86,6,84,9,57]
console.log(secondSmallNumber(array))

  
  
  
  
  