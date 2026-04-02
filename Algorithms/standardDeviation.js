function standardDeviation(values) {
  let numOfelms = values.length;
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }
  console.log(sum);
  console.log(numOfelms);
  let average = sum / numOfelms;
  let squaredDev = 0;
  for (let i = 0; i < values.length; i++) {
    let deviation = (values[i] - average) ** 2;
    squaredDev += deviation;
  }

  let standardDeviation = Math.sqrt(squaredDev / numOfelms);
  return standardDeviation;
}
console.log(standardDeviation([27, 60, 40, 30, 32]));
