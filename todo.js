
{'todos', `['batten down hatches', 'charge flashlight']`}


let currentTodos = JSON.parse(localStorage.getItem('todos'));

const newTodo = 'Get Candles'

const currentTodos.push(newTodo)

localStorage.setItem('todos', JSON.stringify(currentTodos))