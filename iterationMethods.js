const numbers = [10, 13, 20, 25, 38, 35, 40];
// part1 q1
const greaterThanOrEqual = numbers.filter((num) => num >= 25);
console.log(greaterThanOrEqual);
// part1 q2
const divisileByFive = numbers.filter((num) => num % 5 === 0);
console.log(divisileByFive);
// part2 q1
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);
// part2 q2
const eachNumMultBy2 = numbers.map((num) => num * 2);
console.log(eachNumMultBy2);
// part3 q1
const greaterThanorEqual = numbers
  .filter((num) => num >= 20)
  .map((num) => num * 2);
console.log(greaterThanOrEqual);
// part3 q2
const divisibleBy5 = numbers
  .filter((num) => num % 5 === 0)
  .map((num) => num * 3);
console.log(divisibleBy5);
