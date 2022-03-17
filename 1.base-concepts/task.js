"use strict";

function solveEquation(a, b, c) {
  // код для задачи №1 писать здесь
  let x;
  let x2;
  const d = b * b - 4 * a * c;
  let arr = [];
  //let equation = (a * x ** 2 + b * x + c === 0);
  if (d < 0) {
    //arr.push(x = []);
    console.log(`корней нет`);
  } else if (d === 0) {
    arr.push((x = x2 = -b / (2 * a)));
    console.log(`корень: ${x}`);
  } else if (d > 0) {
    arr.push(
      (x = (-b + Math.sqrt(d)) / (2 * a)),
      (x2 = (-b - Math.sqrt(d)) / (2 * a))
    );
    console.log(`корни: ${x},${x2}`);
  }
  console.log(`Дискриминант: ${d}`);
  return arr; // array
}
let solution = solveEquation(1, -6, 9);
console.log(`Корень:${solution}`);
//
//
//
//
//
//
//
//
function calculateTotalMortgage(percent, contribution, amount, date) {
  const credit = amount - contribution;
  //const creditDate = date + Date.now();
  //let dateMonth = date / 12;
  const monthlyPercent = percent / 100;
  const totalAmount =
    credit *
    (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** date - 1));
  console.log(monthlyPercent);
  console.log(credit);

  return totalAmount;
}

let payment = calculateTotalMortgage(10, 1000, 50000, 12);
console.log(`выплата по ипотеке: ${payment.toFixed(2)}`);
console.log(typeof payment);
