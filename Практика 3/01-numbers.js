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
*/
