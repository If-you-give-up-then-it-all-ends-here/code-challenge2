const submit = document.getElementById("js_button");
const inputs = document.querySelectorAll(".first_name, .last_name, .email, .message");
const errorText = document.querySelectorAll(".js_error-text1, .js_error-text2, .js_error-text3,.js_error-text5");
const errorText2 = document.querySelectorAll(".js_error-text4,.js_error-text6");
const checkbox = document.querySelector(".checkbox");
const sendMessage = document.querySelector(".send_message");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener("click",()=>{
    let isValid = true;
    //空白またはメールが正規表現で書かれているか→その結果でエラーの表示・非表示
    inputs.forEach((input, index)=>{
        if(input.value.trim() ==="" || (input === email && !emailRegex.test(email.value))) {
            displayError(input, errorText[index]);
            if (input === email){
                email.placeholder = "email@example.com";
            }
            isValid = false;
        } else {
            deleteError(input, errorText[index]);
        }
    })
//ラジオボタンのチェック
    const radio = document.querySelector('input[name="query-type"]');
    const checkedRadio = document.querySelector('input[name="query-type"]:checked');
    if(!checkedRadio) {
        displayError(radio, errorText2[0]);
        isValid = false;
    } else {
        deleteError(checkedRadio, errorText2[0]);
    }
//チェックボックスのチェック
    if(!checkbox.checked) {
        displayError(checkbox, errorText2[1]);
        isValid = false;
    } else {
        deleteError(checkbox, errorText2[1]);
    }
//すべてエラーがなければsendMessageを表示
    if (isValid){
        sendMessage.classList.add("block");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});

//エラー表示
const displayError = (input, text)=> {
    if (input.classList.contains("js_button") === false){
        input.classList.add("error-border");
    }
    text.classList.add("block");
};

//エラー非表示
const deleteError = (input, text)=>{
    if (input.classList.contains("js_button") === false){
        input.classList.remove("error-border");
    }
    text.classList.remove("block");
};

//空白を削除し中が空かどうか
const trim = (item)=>{
    return item.value.trim() ==="";
}
