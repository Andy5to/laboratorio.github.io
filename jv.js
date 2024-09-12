let sinUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick = function() {
    nameInput.style.maxHeight= "0";
    title.innerHTML = "Login";
    sinUp.classList.add("disable");
    signIn.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.maxHeight= "60px";
    title.innerHTML = "Registro";
    sinUp.classList.remove("disable");
    signIn.classList.add("disable");
}