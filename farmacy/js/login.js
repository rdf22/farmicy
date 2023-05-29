
let root = document.getElementById('root');
root.style.width = "290px"
root.style.backgroundColor = "#2F0F5D"
root.style.height= "400px"
root.style.borderRadius = "20px"
root.style.display= "flex";
root.style.flexDirection = "column";
root.style.textAlign = "center"
root.style.justifyContent = "space-evenly";
root.style.alignItems= "center";
let usernameInput = document.getElementById('usernameInput');
usernameInput.style.color = "black"
usernameInput.style.padding = "5px"
usernameInput.style.borderRadius = "5px"
let passwordInput = document.getElementById('passwordInput');
passwordInput.style.marginLeft = "10px"
passwordInput.style.marginTop = "10px"
passwordInput.style.padding= "5px"
passwordInput.style.borderRadius = "5px"
let loginButton = document.getElementById('loginButton');
loginButton.style.textAlign = "center";
loginButton.style.alignContent = "center";
loginButton.style.fontFamily = "30px";
loginButton.textContent = "LOGIN";
loginButton.style.borderRadius = "5px"
loginButton.style.padding ="8px"
loginButton.style.marginBottom = "10px"
loginButton.style.marginTop = "15px"
loginButton.style.backgroundColor = "rgb(243, 242, 225)"
loginButton.style.transition = "0.2 ease"
loginButton.style.cursor = "pointer"
let logoutButton = document.getElementById('logoutButton');
logoutButton.style.borderRadius = "5px"
logoutButton.style.paddingBottom ="5px"
logoutButton.style.marginLeft ="20px"
logoutButton.style.backgroundColor = "#2F0F5D"
logoutButton.style.cursor = "pointer"
let admin = document.getElementById('admin');
let basic = document.getElementById('basic');
let username = document.getElementById('username');
admin.style.display = "none";
basic.style.display = "none";
logoutButton.style.display = "none";

function onLogin() {
  localStorage.setItem("username", usernameInput.value);
  logoutButton.style.display = "block";

  if(usernameInput.value == "tara" && passwordInput.value == "wana123") {
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none"
    passwordInput.style.display = "none"
    root.style.display ="none"
    loginButton.style.display = "none"
    basic.style.display = "none"
    admin.style.display = "block"
    console.log(rolle);
 
  }
  else if (usernameInput.value == "dokter" && passwordInput.value == "123"){
    localStorage.setItem("role", "dokter");
    usernameInput.style.display = "none"
    passwordInput.style.display = "none"
    root.style.display ="none"
    loginButton.style.display = "none"
    basic.style.display = "none"
    admin.style.display = "none"
    console.log(rolle);
  }
  else {
    usernameInput.style.display = "none"
    passwordInput.style.display = "none"
    loginButton.style.display = "none"
    localStorage.setItem("role", "basic");
    admin.style.display = "none";
    basic.style.display = "block";
    root.style.display ="none"

  }

}

if(localStorage.getItem('username')){
let rolle ;
  
 
  if(localStorage.getItem('role') == "admin"){
    rolle ="admin";
    basic.style.display = "none";
    admin.style.display = "block";
    root.style.display ="none"
    logoutButton.style.display= "block"

  }
  else if(localStorage.getItem('role') == "dokter"){
    rolle ="dokter";
    admin.style.display = "none";
    basic.style.display = "block";
    root.style.display ="none"
    logoutButton.style.display = "block"
  }
  else{
    rolle ="basic";
    admin.style.display = "none";
    basic.style.display = "block";
    root.style.display ="none"
    logoutButton.style.display = "block"

  }
  console.log(rolle);
  console.log('username',localStorage.getItem('username'));
}

function onLogout() {
  localStorage.clear();
  location.reload();
  root.style.display ="none"
}

