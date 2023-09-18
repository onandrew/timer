const input = process.argv.slice(2);
const data = input.filter(numbers => {
  return numbers > 0;
});
const timer = function() {
  for (const x of data) {
    setTimeout(() => {
      return process.stdout.write('.');
    }, x * 1000);
  }
};
timer(data);

