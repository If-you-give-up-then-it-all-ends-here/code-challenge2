
const submit = document.getElementById("js_button");
const firstName = document.getElementById("first_name");
const firstNameInput = document.querySelector(".first_name");
const lastName = document.getElementById("last_name");
const lastNameInput = document.querySelector(".last_name");
const email = document.getElementById("email");
const emailInput = document.querySelector(".email");
const message = document.getElementById("message");
const messageInput = document.querySelector(".message");
const checkbox = document.getElementById("js_checkbox");
const errorText1 = document.querySelector(".js_error-text1");
const errorText2 = document.querySelector(".js_error-text2");
const errorText3 = document.querySelector(".js_error-text3");
const errorText4 = document.querySelector(".js_error-text4");
const errorText5 = document.querySelector(".js_error-text5");
const errorText6 = document.querySelector(".js_error-text6");

const sendMessage = document.querySelector(".send_message");

//ダメなの分かっていますが、後から変更する前提でerrorText1など数字でナンバリングしてます。理解＆整理しやすいので最初だけお許しを



submit.addEventListener("click",()=>{
    let isValid = true;

    if (firstName.value.trim() ==="") {
        displayError();
        isValid = false;
    } else {
        firstNameInput.classList.remove("error-border");
        errorText1.classList.remove("block");
    }
    
    if(lastName.value.trim() ==="") {
        displayError2();
        isValid = false;
    } else {
        lastNameInput.classList.remove("error-border");
        errorText2.classList.remove("block");
    }
    if(email.value.trim() ==="") {
        displayError3();
        isValid = false;
    } else {
        emailInput.classList.remove("error-border");
        errorText3.classList.remove("block");
        email.placeholder = "";
    }
    const radio = document.querySelector('input[name="query-type"]:checked');
    if(!radio) {
        displayError4();
        isValid = false;
    } else {
        errorText4.classList.remove("block");
    }
    
    if(message.value.trim() ==="") {
        displayError5();
        isValid = false;
    } else {
        messageInput.classList.remove("error-border");
        errorText5.classList.remove("block");
    }
    if(!checkbox.checked) {
        displayError6();
        isValid = false;
    } else {
        errorText6.classList.remove("block");
    }

    
    if (isValid===true){
        console.log(isValid);
        sendMessage.classList.add("block");// ←これが動かないのが分かりませんでした。
    }
});

const displayError = ()=>{
    firstNameInput.classList.add("error-border");
    // errorText.classList.remove("hidden")
    errorText1.classList.add("block");
};
const displayError2 = ()=>{
    lastNameInput.classList.add("error-border");
    errorText2.classList.add("block");
};
const displayError3 = ()=>{
    emailInput.classList.add("error-border");
    errorText3.classList.add("block");
    email.placeholder = "email@example.com";
};
const displayError4 = ()=>{
    errorText4.classList.add("block");
};
const displayError5 = ()=>{
    messageInput.classList.add("error-border");
    errorText5.classList.add("block");
};
const displayError6 = ()=>{
    errorText6.classList.add("block");
};