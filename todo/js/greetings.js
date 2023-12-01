/* DOM 사용을 위한 전역 변수*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

/* 클래스 내용을 다중으로 사용할때 편하게 변수에 저장 그리고 로컬스토리지 안에 
key 값을 저장할때 필요한 이름 을 변수로 */
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "이름"

/*
1. submit 을 동작할때 실행할 함수 그리고 
2. 브라우저에 기본 동작을 막기위한 인자.preventDefault
3.로그인 폼에 hidden 클래스를 추가해서 안보이게 할 이벤트
4.사용자에 이름을 저장할 변수 지정 username = loginInput.value;
5.로컬스토리지 안에 키 값과 유저 이름 내용
6.onLohinSubmit 함수가 동작할때 동작할 h1에 함수 유저 정보를 받기위한 인자*/
function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY ,username)
  paintGreetings();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}

/*
1. onloginSubmit 함수가 동작할때 같이 동작할 함수
2. greeting h1에 적용할 텍스트 Hello ${함수인자}
3. greeting 에 hidden 클래스를 지워줄 함수 */
function paintGreetings(){
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `안녕하세요! ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*loginForm 사용자가 입력 submit 이벤트를 동작했을때
 onLoginSubmit 함수 적용*/
loginForm.addEventListener("submit", onLoginSubmit);
 

/* seveUsername 로컬 스토리지에서 받아서 사용할 사용자의 key값 */
const saveUsername = localStorage.getItem(USERNAME_KEY);

/*
1. saveUsername 는 사용자가 아무것도 입력 하지않앗을땐 로컬스토리자가 null값
그래서 === null 조건이 참이 되므로 밑에 함수들이 적용
2.saveUsername 값이 null 이 아니고 정보가 입력됬을땐 false 거짓이 되므로
밑에 else 구문에 paintGreetings(paintGreetings(인자)) 함수 동작*/
if(saveUsername === null){
  /*유저가 처음 아무것도 입력하지 않앗을떄*/
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
  /*입력한 상태에서 새로고침을 했을대 그대로 남아있고 다시 위로 올라가
    paintGreetings 함수 동작*/
    paintGreetings(saveUsername);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
}

