// 'use strict';

let money = prompt("Ваш бюджет на месяц?", " ");
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");

let appDate = {
    budjet: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeDate: time,
    savings: false,
};

let stateInMonth = prompt("Введите обязательную статью расходов в этом месяце?", " "),
    stateMoney = prompt("Во сколько обойдется?", " "),
    stateInMonth2 = prompt("Введите обязательную статью расходов в этом месяце?", " "),
    stateMoney2 = prompt("Во сколько обойдется?", " ");

appDate.expenses[stateInMonth] = stateMoney;
appDate.expenses[stateInMonth2] = stateMoney2;

alert(appDate.budjet / 30);