const todoList = [{
  name: 'review course',
  dueDate: '2025-09-29'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  // Loop over every toDo object and append it to "todoListHTML"
  todoList.forEach(
      (todo,index)=>{
        const html  =
            ` <div>
                  <p> ${todo.name} AT  ${todo.dueDate} </p> 
                   <button class="delete-todo-button"> Delete</button>
              </div>
            `
        todoListHTML+=html ;

  })
  // Show the objects inside the class "js-todo-list"
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  // Loop over evey delete button and add an eventListener that deletes the toDo and rerender the Tasks
  document.querySelectorAll('.delete-todo-button').forEach(
      (btn,index)=>{
        btn.addEventListener('click',()=>{
            //  delete at index , one element
            todoList.splice(index,1);
            renderTodoList()
            }
        )
      }
  )


}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  // Add these values to the variable "todoList"
  todoList.push({
    name: name,
    dueDate: dueDate
  })  ;


  inputElement.value = '';

  renderTodoList();
}