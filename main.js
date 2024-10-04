const PI = 3.14;
function isPrime(number) {
  let isPrime = true;
  if (number !== 2 && number % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 3) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
function findPrimesInRange(range) {
  const primes = [];
  for (let j = 2; j < range; j++) {
    if (isPrime(j)) {
      primes.push(j);
    }
  }
  return primes;
}
findPrimesInRange(1000);

function sort(array = [], checkCb) {
  for (let i = array.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (checkCb(array[j], array[j + 1])) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(sort([5, 2, 3, 4], (a, b) => a > b));

console.log(
  sort(
    [
      { name: "ali", age: 12 },
      { name: "hassan", age: 8 },
      { name: "parisa", age: 22 },
      { name: "zahra", age: 16 },
    ],
    (a, b) => a.name > b.name
  )
);
