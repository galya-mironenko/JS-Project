'use strict';

let money = prompt("Ваш бюджет на месяц?", " ");
let timeDate = prompt("Введите дату в формате YYYY-MM-DD", " ");
console.log(money);
console.log(timeDate);
let expenses = {};
let optionalExpenses = {};
let income = [];
let savings = false;
let addDate = { money, timeDate };
let stateInMonth = prompt("Введите обязательную статью расходов в этом месяце?", " ");
let stateMoney = prompt("Во сколько обойдется?", " ");
expenses.stateInMonth = stateMoney;
console.log(expenses);
let budjetOneDay = +money / 30;
alert(budjetOneDay);