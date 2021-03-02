'use strict'

/* 1. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). */

/* let num = 159;
function sumOfNums(num) {
    let str = num.toString();
    let res = 0;
    for (let i = 0; i < str.length; i++) {
        res += +str[i];
    }
    if (res > 9) {
        res = sumOfNums(res);
    }
    return res;
}
console.log(sumOfNums(num)); */

/* 2. Вычислить значение факториала N!.
N! = N * (N-1)! */

/* function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        return 'Error'
    }
}

console.log(factorial(5)); */

/* 3. Вычисление и вывод i-го числа Фибоначчи, где параметр i вводится пользователем. При вводе некорректного параметра предусмотреть генерацию исключительной ситуации. */

/* function fibonacci(n) {
    let a = 1;
    let b = 2;
    for (let i = 1; i < n; i++) {
        b += a;
        a = b - a;
    }
    return a;
}

console.log(fibonacci(8)); */

/* 4. Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.
'2021-03-02' */

/* let now = new Date();
alert(`${now.getFullYear()}-${now.getDate() + 1}-${now.getDay()}`) */

/* 5. Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). */

let date = new Date();

function addZero(num) {
    if (num < 10) return `0${num}`
}



console.log(`${addZero(date.getHours() + 1)}:${addZero()}:${date.getSeconds() + 1} ${date.getFullYear()}.${addZero(date.getMonth)}.`)