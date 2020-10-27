
import './styles.css'; // importar el archivo css al index html
// import {Todo} from './classes/todo.class.js'; // importar la clase Todo

import {Todo, TodoList} from './classes' ;// por defecto busca el index.js
import {crearTodoHtml} from './js/componentes';

export const todoList = new TodoList();
// console.log(todoList.todos)
todoList.todos.forEach((todo) => {
    // console.log(todo)
    crearTodoHtml(todo)
    // El método forEach() ejecuta la función indicada una vez por cada elemento del array.
    // todoList.todos.forEach(crearTodoHtml); -- es lo mismo, si es solo un arguemtno
    
});
// const tarea = new Todo('Aprender JavaScript')
// crearTodoHtml(tarea)
// todoList.nuevoTodo(tarea)
// console.log(todoList)

// localStorage.setItem('mi-key','abc123a')
// sessionStorage.setItem('mi-key','abc123a')

 //localStorage.- se almacena sin tiempo de expiracion
 //SesionStorage.- al cerrar el navegador se borran los valores
 // solo si trabajamos con el frontend

// un localStora por cada dominio
 //12.........




























