const submit = document.getElementById("js_button");
const sendMessage = document.querySelector(".send_message");
const errorTexts = document.querySelectorAll(".js_error-text");

submit.addEventListener("click",()=>{
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const checkbox = document.getElementById("js_checkbox");
    const radio = document.querySelector('input[name="query-type"]:checked')
    const inputFields = [firstName, lastName, email, radio, message, checkbox]

    inputFields.forEach((input, index)=>{
        const hasError = (input == null || (input.getAttribute("data-input-type") == "check" && !input.checked)) ? true : input.value.trim() === ""
        if(hasError){
            displayError(errorTexts[index], input)
        }else{
            hideError(errorTexts[index], input)
        }
    })
});

// 関数
const isEmailField = (input) =>{
    return input !== null && input.id === "email" ? true : false
}
const ischeckField= (input) =>{ 
    return (input == null || input.getAttribute("data-input-type") == "check")  ? true: false
}

const displayError = (errorTxt, input)=>{
    errorTxt.classList.add("block");

    if(!ischeckField(input)) {
        input.classList.add("error-border");
    }
    if(isEmailField(input)) input.placeholder = "email #example.com"
}

const hideError = (errorTxt, input) =>{
    errorTxt.classList.remove("block");

    if(!ischeckField(input)) input.classList.remove("error-border");
    if(isEmailField(input)) input.placeholder = ""
}
