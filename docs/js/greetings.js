const loginForm = document.querySelector("#login-form");
// 선택된 loginForm 또한 document의 하위 객체이므로 querySelector함수를 사용할 수 있다.
const loginInput = loginForm.querySelector("input"); // #login-form input
const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
const greeting = document.querySelector("#greeting");

const svaedUserName = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
  document.querySelector("#todoWrap").classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  const hours = new Date().getHours();
  let greetingWord = "";
  if (hours < 12) {
    // 오전
    greetingWord = "Good morining";
  } else if (hours < 18) {
    // 오후
    greetingWord = "Good afternoon";
  } else {
    // 저녁
    greetingWord = "Good evening";
  }
  greeting.innerText = `${greetingWord} ${userName}`;
}
if (svaedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings();
  document.querySelector("#todoWrap").classList.remove(HIDDEN_CLASSNAME);
}
