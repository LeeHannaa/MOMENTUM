const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const doDoFrom = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(info) {
  info.preventDefault(); //브라우저의 기본 정보를 막아준다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `${username}님,\n 짱구의 세계에 오신걸 환영합니다.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  doDoFrom.classList.remove(HIDDEN_CLASSNAME); // todoform 보임
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the h1
  paintGreetings(savedUsername);
}
