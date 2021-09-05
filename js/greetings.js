const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 본인이 생성한 string을 반복해서 사용하게 될 경우에는 앞서 만든 class name "hidden"이나 local storage key "username"처럼
// 반복되는 string들은 대문자 변수로 저장해 놓는 것이 실수를 만들고 싶지 않은 string이라는 사실을 기억하고 상기시키기 좋음

function onLoginSubmit(event){
    const username = loginInput.value;
    
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername);
}