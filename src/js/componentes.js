import {Todo} from '../classes/'
import {todoList} from '../index'

//referencia en el HTML
const divTodoLista = document.querySelector('.todo-list');//ul
const txtInput = document.querySelector('.new-todo') //SELECCIONA EL INPUT
const btnBorrar = document.querySelector('.clear-completed')
const ulFiltros = document.querySelector('.filters');
const anchoFiltros = document.querySelectorAll('.filtro') //areglo de la los que contiene la clase filtro
export const crearTodoHtml = (todo)=>{//li
    //metodo que permita crear un todo en html         true
    const htmlTodo = `<li class="${(todo.completado)?'completed':''} " data-id='${todo.id}'>
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado)?'checked':''} >
        <label>${todo.tarea}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`;
const div = document.createElement('div')
div.innerHTML = htmlTodo
divTodoLista.append(div.firstElementChild) //retorna el primer hijo del objeto Element

return div.firstElementChild

}


//eventos
//keyup - al hacer enter dispara la funcion
// el parametro event dira que tecla fue presiopnada por  el usuario
 txtInput.addEventListener('keyup',(event)=>{ // dispara las propiedades de la tecla

    if(event.keyCode ===13 && txtInput.value.length != 0){
        
        // console.log(txtInput.value)
        const nuevoTodo = new Todo(txtInput.value);
        todoList.nuevoTodo(nuevoTodo) // persistencia
        console.log(todoList)
        // console.log(todoList)
        crearTodoHtml(nuevoTodo)
        txtInput.value=''; //vaciar el input
        

    }



})
//hace referecia al a la etiquta ul -y el evento hace efecto en su etiquetas hijas
divTodoLista.addEventListener('click',(evento)=>{


    // console.log('click')
//   console.log(evento.target) // 
    // console.log(evento.target.localName) // localName devuelve el nombre local (nombre del elemento) del elemento seleccionado (etiqueta)
    const nombreElemento = evento.target.localName //label , input o button
    const  todoElemento  = evento.target.parentElement.parentElement; // li
    const todoId = todoElemento.getAttribute('data-id') // muestra el id del elemnto selecionado
    console.log(nombreElemento)
    if(nombreElemento.includes('input')){ // click en el check
      
    todoList.marcarCompletado(todoId);
     todoElemento.classList.toggle('completed') //si ya exite la quita sino exite la pone
    }else if (nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId) // presistencia
       divTodoLista.removeChild(todoElemento) //elimna el li
        // El método Node.removeChild() elimina un nodo hijo del DOM y puede devolver el nodo eliminado.




    }

   
    //La propiedad parentElement devuelve el elemento primario del elemento especificado.
    // console.log(todoElemento)
})

btnBorrar.addEventListener('click',()=>{

    // todoList.eliminarCompletados()
                     //li
    for (let i = divTodoLista.children.length-1; i >= 0; i--) {

        const elemento = divTodoLista.children[i] //li
         
        console.log(elemento.classList.value)
        //.contains devuelve true si el elemento indicaso se encuentra en dicho lugar
         if(elemento.classList.contains('completed')){ // si tiene la clase -- completed -true
            divTodoLista.removeChild(elemento) // remueve el li 
 

        }
        
    }


})

ulFiltros.addEventListener('click',(evento)=>{
    


    const filtro =evento.target.text 
    // if(!filtro){return}
   anchoFiltros.forEach(elemento=>elemento.classList.remove('selected'))
   evento.target.classList.add('selected')
    for (const elemento of divTodoLista.children) {
        
        elemento.classList.remove('hidden')
        const completado = elemento.classList.contains('completed')
        
        switch(filtro){
            case 'Pendientes':
                if(completado){ //SI TIENE LA CLASE completed APLICAR EL HIDDEN 
                    elemento.classList.add('hidden')
                }
                break;
            case 'Completados':
                if(!completado){ // SINO TIENE LA CLASE HIJEN APLICAR EL HIDDEN
                    elemento.classList.add('hidden')
                }
                break;
        }
    }
})