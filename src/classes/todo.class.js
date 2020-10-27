export class Todo{

    static fromJson({id,tarea,completado,creado}){

       const tempTodo = new Todo(tarea); // en contructor pide la tarea
       // pero nosotroa le damos los valores por defecto de la instancia
       // establecemmos las propiedades de la instancia
       tempTodo.id = id
       tempTodo.completado= completado
       tempTodo.creado=creado
       return tempTodo

    }
    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //112122323
        this.completado = false
        this.creado = new Date() // retorna la fecha actual
    }
}