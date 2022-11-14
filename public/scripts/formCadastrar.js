const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const date = document.querySelector("#date")
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");


const msgErrorFirstName = document.getElementById("msg-error-first-name")

form.addEventListener("submit", (event)=>{
    if(firstName.value == " " || firstName.value.length < 3){
        msgErrorFirstName.innerText == "O nome está pequeno demais."
        event.preventDefault();
        console.log(msgErrorFirstName)
    }
})