/* Немного теории о масивах
const array = [1, 2, 3, 5, 20]
const arrayStrings = ['a', 'b', 'c', null, 12]
const array = new Array(1, 2, 3, 5, 20) // тоже самое, что и в 3 строке

console.log(array)
console.log(array.length)
console.log(array[0]) // 1 элемент
console.log(array.length - 1) // последний элемент
console.log(array[8888]) // несуществующий элемент = undefined

Можем изменять массив, как нам вздумается
array[0] = 'Hello' // = ['Hello', 2, 3, 5, 20]

array[array.length] = 'become' // способ добавления элемента в конец массива (не рекомендуется)
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// немного поиграемся с условной работой с сервером
// const notes = ['выучить js', 'выучить ts', 'выучить react', 'быстренько найти работу']

/*function getNoteTamplate(title) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${title}</span>
        <span>
          <span class="btn btn-small btn-success">&check;</span>
          <span class="btn btn-small btn-danger">&times;</span>
        </span>
      </li>
      `
}*/

/*function render() {
  // Принимает два параметра (куда, что вставляем)
  // заодно поработаем над циклами

  // первый синтаксис цикла for
  // for (let i = 0; i < notes.length; i++) {
  //   listElement.insertAdjacentHTML('beforeend', getNoteTamplate(notes[i]))
  // }

  // второй синтаксис цикла for
  // перебирает каждый элемент массива и хватает его значение
  for (let note of notes) {
    listElement.insertAdjacentHTML('beforeend', getNoteTamplate(note))
  }
}
*/
// render()

/*
createBtn.onclick = function () {
   listElement.innerHTML = inputElement.value // св-во innerHTML позвоялет заменять, как в данном случае HTML код, но без стилистики 
  // listElement.innerHTML =
  //   `
  //   <li class="list-group-item d-flex justify-content-between align-items-center">
  //       <span>${inputElement.value}</span>
  //       <span>
  //         <span class="btn btn-small btn-success">&check;</span>
  //         <span class="btn btn-small btn-danger">&times;</span>
  //       </span>
  //     </li>
       `
  
  if (inputElement.value.length === 0) {
    return
  }

  // Принимает два параметра (куда, что вставляем)
  listElement.insertAdjacentHTML(
    'beforeend',
    getNoteTamplate(inputElement.value)
  )

  inputElement.value = ''; // чтобы после выполнения команды, мы не могли спамить
}
*/

/**Теория по объектам
 *имеют в себе ключ - значение  
 
const person = {
  firstName: 'Denis',
  lastName: 'Prilukov',
  year: 2002,
  hasJob: false,
  languages: ['ru', 'en'],
  getFullName: function () {
    console.log(person.firstName + ' ' + person.lastName)
  }
}
// console.log(typeof person) // obj
// console.log(typeof notes) // obj =)))
person.getFullName() // Denis Prilukov
 
// Можем вызывать значения параметров объекта через квадратные скобки
console.log(person['languages'])
let key = 'hasJob'
console.log(person[key]) // false
person.hasJob = true
console.log(person['hasJob']) // true
*/

const notes = [
  {
    title: 'выучить js',
    completed: true
  },
  {
    title: 'выучить ts',
    completed: false
  },
  {
    title: 'выучить react',
    completed: true
  },
  {
    title: 'быстренько найти работу',
    completed: false
  }
]

function render() {
  listElement.innerHTML = ''
  if (notes.length === 0) {
    listElement.innerHTML = '<p>У вас нет задач, исправьте это!</p>'
  } else {
    for (let i = 0; i < notes.length; i++) {
      listElement.insertAdjacentHTML('beforeend', getNoteTamplate(notes[i], i))
    }
  }

  // for (let note of notes) {
  //   listElement.insertAdjacentHTML('beforeend', getNoteTamplate(note))
  // }
}

render()

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return
  }
  //так как сейчас мы должны отправлять не строчку, то объект, делаем след образом
  const newNote = {
    title: inputElement.value,
    completed: false,
  }
  notes.push(newNote)
  render()
  inputElement.value = '';
}

// Делегирование события, одна из фишек JS
/* конкретно в этом случае, при нажатии на любую область списка, подхватывается та зона,
которая была нажата, будь то кнопка, или текст в теге <li>
*/
listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type

    // расшифровка: если нажатая кнопка является succes...
    if (type === 'toggle') {
      notes[index].completed = !notes[index].completed
    } else {
      notes.splice(index, 1)
    }

    render()
  }
}

//Если мы пишем функцию как снизу, то мы можем ее использовать до того, как ее объявили
//p.s если что data-index свойства не существует, просто мы его поместили сюда для введения индексирования кнопок
function getNoteTamplate(note, index) {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
        <span>
          <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" 
          data-type="toggle">&check;</span>
          <span class="btn btn-small btn-danger" data-index="${index}"
          data-type="remove">&times;</span>
        </span>
      </li>
      `
}
