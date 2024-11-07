/* Теория над методами с массивами
const names = ['Денис', 'Елена', 'Игорь', 'Ксюша']

// names.push('Алена') // ['Денис', 'Елена', 'Игорь', 'Ксюша', 'Алена']

// names.unshift('Алена') // ['Алена', 'Денис', 'Елена', 'Игорь', 'Ксюша']

// const firstName = names.shift()
// console.log('Names: ', names, firstName) // ['Елена', 'Игорь', 'Ксюша'] Денис

// names.pop() // Ксюша

// console.log(names.reverse()) // ['Ксюша', 'Игорь', 'Елена', 'Денис']
// console.log(names) // массива мутировался и стал как показано выше

// если не хотим наблюдать такое поведением, используем вот такую штуку
// console.log(names.toReversed()) // ['Ксюша', 'Игорь', 'Елена', 'Денис']
// console.log(names) // ['Денис', 'Елена', 'Игорь', 'Ксюша']


// const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters.sort()) // ['a', 'b', 'c', 'd', 'e']
// console.log(letters) // ['a', 'b', 'c', 'd', 'e']

// console.log(
//     letters.sort(function (a, b) {
//         return a - b // ['e', 'c', 'd', 'b', 'a']
//     }))

// console.log(names.splice(2, 1)) // ['Игорь']

// const greatWoman = 'Елена'
// const index = names.indexOf(greatWoman) // 1

// const newNames = names.with(1, 'Екатерина')
// console.log(names) // ['Денис', 'Елена', 'Игорь', 'Ксюша']
// console.log(newNames) // ['Денис', 'Екатерина', 'Игорь', 'Ксюша']

// const greatWoman = 'Елена'
// const index = names.indexOf(greatWoman)
// const capitalNames = names.map(function (name, index) {
//     if (index === 1) {
//         return 'Екатерина'
//     }
//     return name
// })

// console.log(names.includes('Денис')) // true
// console.log(names.indexOf('Денис') !== -1 ? true : false)
*/

const people = [
  {
    name: "Денис",
    budget: 4200,
  },
  {
    name: "Елена",
    budget: 15100,
  },
  {
    name: "Игорь",
    budget: 300,
  },
  {
    name: "Ксения",
    budget: 7520,
  },
];

// задача найти человека в массиве, бюджет которого равен 7520
// console.log(people.indexOf({ budget: 7520 })) // -1

/*Так лучше делать не стоит
// let findedPerson
// for (let person of people) {
//     if (person.budget === 7520) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)
*/

// const findPerson = people.find(function (person) {
//     if (person.budget === 7520) {
//         return true
//     }
// })
// console.log(findPerson) // {name: 'Ксения', budget: 7520}

// const findPerson = people.find((person) => person.budget === 7520)
// console.log(findPerson) // {name: 'Ксения', budget: 7520}

// const findPerson = people.findIndex(function (person) {
//     return person.budget === 7520
// })
// console.log(findPerson) // 3

// const filtered = people.filter(function (person) {
//     return person.budget > 5000
// })
// console.log(filtered)

// создадим свою задачу: посчитать суммарное количество тех людей, которые богатые

/* Черновой вариант
// let sumBudget = 0

// const filtered = people.filter(function (person) {
//     return person.budget > 5000
// }) 
// console.log(filtered)
// filtered.forEach(function (person) {
//     sumBudget += person.budget // 22620
// })

// console.log(sumBudget)
*/

/* Наиболее правильное решение, функциональное программирование
// const sumBudget = people
//   .filter((person) => person.budget > 5000)
//   .map((p) => p.budget)
//   .reduce((acc, p) => acc + p, 0);

// console.log(sumBudget);
*/

const string = "Привет, как дела?";
const reversed = string.split("").roReversed().join("");
console.log(reversed);
