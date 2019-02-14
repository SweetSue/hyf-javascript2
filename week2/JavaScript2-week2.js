// EXERCISE 1.1
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
// ******************************************
// NEW WAY TO DO IT
function dOddNumbers(someArray) {
  return someArray
    .filter(function(val) {
      return val % 2 !== 0;
    })
    .map(function(val) {
      return val * 2;
    });
}
// doubleOddNumbers(arr)
const someNumbers = [1, 2, 3, 4, 1, 8, 13];
console.log(dOddNumbers(someNumbers)); // ==> [2, 6, 2,26]

// ******************************************
// EXERCISE 1.2
const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];
var tasks = [monday, tuesday];
var result = tasks
  .reduce(function(taskGroup, current) {
    return taskGroup.concat(current);

    // convert task duration from minutes to hours
  })
  .map(function(task) {
    return task.duration / 60;

    // filter the tasks longer than 2 hours
  })
  .filter(function(duration) {
    return duration >= 2;
    //  calculate the fee for each long task
  })
  .map(function(duration) {
    return duration * 20;
    // calculate the total fee
  })
  .reduce(function(taskGroup, current) {
    return [+taskGroup + +current];
    // insert the dollar currency sign before the total fee
  })
  .map(function(dollar_amount) {
    return '$' + dollar_amount.toFixed(2);
  })
  // format the total fee without brackets
  .reduce(function(formatted_dollar_amount) {
    return formatted_dollar_amount;
  });

console.log(result);

// EXPLAINATION HERE
// https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209

// MORE HERE
// https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206
