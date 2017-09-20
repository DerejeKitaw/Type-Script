function showTodo(todo:{title: string, text: string}){
    console.log(todo.title + ' : '+ todo.text);
}

let myTodo = {title:'Trash', text:'Take out trash'}

showTodo(myTodo);


// ******** Better way of doing the above ******************************* //
interface Todo{
    title: string;
    text: string;
}

function showTodo_1(todo: Todo){
    console.log(todo.title + ' : '+ todo.text);
}

let myTodo_1 = {title:'Food', text:'cook food'}

showTodo_1(myTodo_1);