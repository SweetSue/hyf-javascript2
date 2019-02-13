const monday = [
  {
    name: 'Write a summary HTML/CSS',
    category: 'Writing summary',

    duration: 180,
  },
  {
    name: 'Some web development',
    category: 'Web development',
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
    category: 'Writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    category: 'Web development',
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

// filter out durations shorter than 2 hours
let longTasks = totalDuration.filter(function(e) {
  return e.duration > 120;
});
// console.log(longTasks);

// write durations in hours
let duration = longTasks.map(x => x.duration / 60);
console.log(duration);
