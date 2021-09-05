const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(e){
    const li = e.target.parentElement; // 삭제하려는 li
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    // todo는 todos 데이터베이스 안에 있는 요소 중 하나이다. 그래서 이 함수는 DB에 있는 모든 것과 함께 실행된다.
    // 이 한 줄의 의미는 클릭한 li.id와 다른 todo는 남겨두고 싶다는 의미
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");

    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    }
    todos.push(newTodoObj); // 이 부분에서 데이터베이스로 매번 사용자가 적어둔 text를 push 한다.
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos; 
    // todos array를 시작할 때 localStorage에 저장되어 있는 todos를 불러오고 싶은 것임
    parsedTodos.forEach(paintTodo);
    // paintTodo는 텍스트를 받는데, JS는 그 텍스트를 paintTodo에게 전달해준다.
    // 즉 JS는 paintTodo에 todos에 들어가있는 item을 넣어준다.
}