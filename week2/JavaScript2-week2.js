// 1.1
/*
function doubleOddNumbers(numbers) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      newNumbers.push(numbers[i] * 2);
    }
  }
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
*/

// ******************************************
// NEW SOLUTION

function doubleOddNumbers(someArray) {
  return someArray
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}
const someNumbers = [1, 2, 3, 4, 1, 8, 13];
console.log(doubleOddNumbers(someNumbers)); // ==> [2, 6, 10, 18]
