const numbers = [45, 43, 56, 34, 23, 2, 4, 11];

function getMin() {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}
 const smallest = getMin(numbers);
 console.log('Min Value is:',smallest);
