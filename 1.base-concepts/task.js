"use strict";

function solveEquation(a, b, c) {
  const d = b * b - 4 * a * c;
  console.log(`Дискриминант: ${d}`);
  let arr = [];
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    return [-b / (2 * a)];
  } else if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
}
let solution = solveEquation(1, 5, 4);
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
  let totalAmount;

  if (percent != parseInt(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return totalAmount;
  } else if (contribution != parseInt(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return totalAmount;
  } else if (amount != parseInt(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return totalAmount;
  } else {
    //let today = new Date();
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let yearDifference = date.getFullYear() - currentYear;
    let month = yearDifference * 12 - currentMonth + date.getMonth();
    const credit = amount - contribution;
    const monthlyPercent = percent / 12 / 100;
    let payment =
      credit *
      (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** month - 1));
    totalAmount = payment * month;
    //console.log(totalAmount)
    return Number(totalAmount.toFixed(2));
  }
}
//calculateTotalMortgage();
//let payment = calculateTotalMortgage(10,1000,50000,12);
//console.log(`выплата по ипотеке: ${payment.toFixed(2)}`);
//console.log(typeof payment);
