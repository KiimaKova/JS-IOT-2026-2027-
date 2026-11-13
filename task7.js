function getAverageSalary(salaries) {
  let sum = 0;
  let count = 0;

  for (let key in salaries) {
    sum += salaries[key];
    count++;
  }

  return count === 0 ? 0 : sum / count;
}

let salaries1 = {
  John: 100,
  Bill: 300,
  Mike: 250
};

let salaries2 = {
  Cris: 150,
  Brain: 600,
  John: 300,
  Steve: 400,
  Bill: 50
};

console.log(getAverageSalary(salaries1));
console.log(getAverageSalary(salaries2));
