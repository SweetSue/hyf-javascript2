'use strict';

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
console.log(doubleOddNumbers(someNumbers)); // ==> [2, 6, 2, 26]

// ******************************************
// 1.2

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    category: 'summary',

    duration: 180,
  },
  {
    name: 'Some web development',
    category: 'development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    category: 'homework',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    category: 'talk',
    duration: 1.0,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    category: 'summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    category: 'development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    category: 'miscellaneous',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    category: 'talk',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new students',
    category: 'application',
    duration: 40,
  },
];

// group monday and tuesday tasks
const tasks = monday.concat(tuesday);
//console.log(tasks);

// group identical keys
let addTasks = tasks.reduce(function(acc, val) {
  var o = acc
    .filter(function(obj) {
      return obj.name == val.category;
    })
    .pop() || { name: val.category, duration: 0 };

  o.duration += val.duration;
  acc.push(o);
  return acc;
}, []);

let totalDuration = addTasks.filter(function(itm, i, a) {
  return i == a.indexOf(itm);
});
// console.log(totalDuration);

// write durations in hours
let duration = totalDuration.map(x => x.duration / 60);
console.log(duration);

// filter out durations shorter than 2 hours
