// let num = 42 // number
// let firstName = 'Denis' // string
// const isProgrammer = true // boolean

// num = 10 // все ок, работает
// isProgrammer = true // error

/* Как мы можем создавать переменные?
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let num_ = 49
let _num = 49
let first_name = 'Denis' // плохая практика. используем лучше CamelCase (firstName)
let num42 = 42
*/

/* Не можем делать error
let 42num = 42
let my-num = 42
let false = true
let let = 20
*/

/* обычный алерт, блокирует работу всего сайта
alert(firstName)
Более удобный вариант использования
console.log(firstName)
console.log('Den', firstName, isProgrammer)
*/

/* Математические операции
console.log(num + 10)
console.log(num - 10)
console.log(num * 10)
console.log(num / 10) // 4.2 - float
*/

// let num2 = num + 10
// console.log(num, num2) // 42 52
// num = num2 - num
// console.log(num, num2) // 10 52

// скобки задают приоритет, прям как в уравнениях
// let num3 = (num + 10 * 2) / (5 - 1)
// console.log(num3)

/*Конкатенация (соединение строк)
const fullName = firstName + ' Prilukov' // Denis Prilukov
const fullName = firstName + ' ' + 'Prilukov' // Denis Prilukov
*/

// const resultElement = document.getElementById('result')
// console.log(resultElement) // вывод: <p id="result" class="mb-0">49</p>
// console.log(resultElement.textContent) // 49

// изменим параметр
// resultElement.textContent = 42 // 42
// resultElement.textContent = (42 - 2) / num

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplicationBtn = document.getElementById('multiplication')
const divisionBtn = document.getElementById('division')
let action = '+'
/* Метод изъятия значения 
console.log(input1.value) // 10
console.log(input2.value) // 5
*/

/* Первые баги
const sum = input1.value + input2.value
resultElement.textContent = sum // получаем не 15, а 105 :)))
console.log(typeof sum) // string  - поэтому и значения "складываются": "10" + "5" = "105". 
При считывании данных с html, мы всегда получаем СТРОКУ, а не число
чтобы это пофиксить, то делаем так
*/

// Да, можно ставить слушатель и таким образом, не только eventlistener
plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplicationBtn.onclick = function () {
    action = '*'
}

divisionBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    } else if (actionSymbol == '-') {
        return num1 - num2
    } else if (actionSymbol == '*') {
        return num1 * num2
    } else {
        return num1 / num2
    }
    // Тернарный оператор (ты его знаешь)
    // return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const result = computeWithAction(input1, input2, action)
    printResult(result)

    // if (action == '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
}