const todoList = [];

renderToDoList();

function renderToDoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  todoList.push(name);

  console.log(todoList);

  inputElement.value = "";

  /*
  The variable name holds a copy of the input field's value, not a reference to the field itself. Changing name = "" only updates the variable, not the input field. To clear the field, you must update inputElement.value = "" directly, as it references the actual DOM element.
   */

  renderToDoList();
}
