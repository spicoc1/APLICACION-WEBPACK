import { Todo } from "./todo.class"

export class TodoList {

    constructor(){
        this.cargarLocalStorage()

        // this.todos = [] //iniciLIZA UN ARREGLO VACIO
    }

    nuevoTodo(todo){
        this.todos.push(todo) // INGRESA Y REGISTRA EN EL ARREGLO LA INSTANCIA DE LA CLASE TODO
    this.guardarLocalStorage()
    }
    eliminarTodo(id){
    //   filter() .- crea un nuevo array con todos los elementos que cumplan con la 
    //   condicion implementada por la funcion dad   
    /*https://developer.mozilla.org/es/docs/Glossary/Callback_function */
    
    this.todos= this.todos.filter((todo)=>{
        return  todo.id != id // si es difernte se almacena en el nuevo array si son iguales no se almacena
    
    })
    this.guardarLocalStorage() //this ase referencia al objeto


    }
    marcarCompletado(id){// recibe el id de tipo string
        for (const todo of this.todos) { //iteracion de cada objeto
                // console.log(id, todo.id);
            if(todo==id){ //accede a la propiedad id de la instancia y la compara ccon la que mandamos por parametro
              todo.completado = !todo.completado
              this.guardarLocalStorage()
                break;

            }
            
        }

    }
    eliminarCompletados(){

         this.todos= this.todos.filter((todo)=>{
        return  !todo.completado // si es difernte se almacena en el nuevo array si son iguales no se almacena
        // si es falso almacenarlo en el array  
        // todos los que no esten comletados
    })
    this.guardarLocalStorage()
    }
    guardarLocalStorage(){

        localStorage.setItem('todo',JSON.stringify( this.todos))
        // El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON.

       /*  El método setItem() de la interfaz Storage, cuando reciba una clave y un valor, 
        añadirá estos al almacén, o actualizará el valor si la clave ya existe. */

    }
    cargarLocalStorage(){

        this.todos=(localStorage.getItem('todo')? JSON.parse(localStorage.getItem('todo')):[])
        this.todos = this.todos.map((obj)=>Todo.fromJson(obj)) // entra un objeto y los convierte en instancias
        // this.todos = this.todos.map(Todo.fromJson)  - simplificado     
        /* El método map() crea un nuevo array con los resultados de la llamada a la función 
        indicada aplicados a cada uno de sus elementos. */

       /*  El método JSON.parse() analiza una cadena de texto como JSON, transformando opcionalmente  el valor producido por el análisis. */

        /* El método getItem() de la interfaz Storage, cuando se pasa un nombre de clave, devolverá el valor de esa clave, 
        o si la clave no existe, en el objeto especificado.nullStorage */

    }
}



// ESTO SIRVE PARA ALMACENAR EN UN LUGAR PERCISTENTE