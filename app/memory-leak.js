let k = 0;
const collection = {};
const objLeaks = [];
const classLeaks = [];

// It is important to use named constructors (like the one below), otherwise
// the heap snapshots will not produce useful outputs for you.
function LeakingClass() {}

module.exports = () => {
  k++;
  const key = "globalVariable" + k;
  collection[key] = new Array(1000).fill(key);

  const redundantObj = {
    memory: "leaked",
    joke: "meta",
  };

  [...Array(10000)].map(() => objLeaks.push(redundantObj));

  for (var i = 0; i < 100; i++) {
    classLeaks.push(new LeakingClass());
  }
};
