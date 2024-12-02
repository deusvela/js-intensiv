/* Манипуляции с числами
const num = 42; // целочисленное
const float = 42.42; // вещественное

const pow = 10e3; // в 3 степени = 10000
const big = 1_000_000; // тот же миллион, на отображение никак не повлияет

console.dir(Number); // dir раскрывает полностью внутрилежащий объект

console.log(Number.MAX_SAFE_INTEGER); // максимально допустимое число
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(1 / 0); // Infinity
console.log(Number.isFinite(1 / 0)); // false

console.log(23 / undefined); // NaN

const weird = 23 / undefined;
console.log(Number.isNaN(weird)); // true

const strInt = "42";
const strFloat = "42.42";

// console.log(Number(strInt)); // 42
// console.log(Number(strFloat)); // 42.42

// console.log(Number.parseInt(strInt)); // 42
// console.log(parseInt(strInt)); // 42

// console.log(Number.parseInt(strFloat)); // 42 вместо 42.42, т.к. берем только целую часть
// console.log(Number.parseFloat(strFloat)); // 42.42

// console.log(+strInt, strFloat); // 42 '42.42'. первое значение стало числом

// console.log(0.1 + 0.2); // 0.300000000000000004, дробные числа в js мы всегда проверяем! если работа требует точности

// console.log((0.1 + 0.2).toFixed(1)); // '0.3' такой метод всегда возвращает строчку, в свойства вносится количество символов посе запятой
*/

/* BigInt 

// нужен для тех случаев, когда нужно РЕАЛЬНО большое число (больше, чем MAX_VALUE)
// console.log(Number.MAX_SAFE_INTEGER + 94224980); // рез-т неверный 9007199348965972

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980); // будет ошибка, т.к. BigInt это другой тип данных
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n); // 9007199348965971n

// console.log(typeof -42n); // BigInt

// console.log(42.42n) // ошибка
// console.log(10n - 4); // ошибка
// console.log(parseInt(10n) - 4); // 6
// console.log(10n - BigInt(4)); // 6n
// console.log(5n / 2n) // 2n
*/

/* Math 

// console.log(Math.E);
// console.log(Math.PI);

const myNum = 4.9;

// console.log(Math.sqrt(25)); // 5
// console.log(Math.pow(2, 3)); // 2^3 = 8
// console.log(Math.abs(-5)); // 5
// console.log(Math.max(2, 5, 42, 199, 0)); // 199
// console.log(Math.min(2, 5, 42, 199, 0)); // 0

// console.log(Math.floor(myNum)); // 4, всегда в наименьшую уходит
// console.log(Math.ceil(myNum)); // 5, всегда в набибольшую
// console.log(Math.ceil(4.1)); // 5, всегда в набибольшую
// console.log(Math.round(myNum)); // 5, до ближайшего целочисленного значения
// console.log(Math.trunc(myNum)); // 4, всегда возвращает целую часть числа

// console.log(Math.random()); // рандомное число от 0 до 1 (вещесвенное)

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getRandomNumber(10, 100); // рандомное число от 10 до 100
*/
