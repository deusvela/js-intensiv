// ================ Oператоры
let a = 10
let b = 5
let c = 32

// c = c + a // 42
// c = c - a // 42 - 1 = 32
// c = c * a // 320
// c = c / a // 32

// // сокращенная запись
// c += a // c + a
// c -= a // c - a
// c *= a // c * a
// c /= a // c / a

// c = c ** 2 // возведение в степень
// console.log(c)

// Типы данных

const age = 22 // number
const name = 'Denis' // string
const isProgrammer = true // Boolean
let x // undefined
// null
console.log(1 / x) // NaN - not a number, когда к примеру мы делим число на другой тип данных, вот и js сходит с ума
console.log(typeof NaN) // в консоли будет... number =)))))

// Приориеты
const fullAge = 22
const bitrhYear = 2002
const currentYear = 2024
const isFullAge = currentYear - bitrhYear >= fullAge // так как здесь идет сравнение, то это типо приводится к схеме if 
console.log(isFullAge) // true

// ЗАЗУБРИТЬ
const num1 = 42
const num2 = '42'

//т.е. js считает, что значение в строке и в числе раз одинаково, то и выводит true
console.log(num1 == num2) // true
// проводим сравнение по строгой типизацией, т.е. проверка и на тип данных
console.log(num1 === num2) // false