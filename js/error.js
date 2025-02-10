const submit = document.getElementById("js_button");
const inputs = document.querySelectorAll(".first_name, .last_name, .email, .message");
const errorText = document.querySelectorAll(".js_error-text1, .js_error-text2, .js_error-text3,.js_error-text5");
const errorText2 = document.querySelectorAll(".js_error-text4,.js_error-text6");
const checkbox = document.querySelector(".checkbox");
const sendMessage = document.querySelector(".send_message");
const email = document.getElementById("email");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener("click",()=>{
    let isValid = true;
    //空白またはメールが正規表現で書かれているか→その結果でエラーの表示・非表示
    inputs.forEach((input, index)=>{
        //文字が入力されていなかったらorメールが正しく入力されていなかったらエラーテキストを表示
        if(input.value.trim() ==="" || (input === email && !emailRegex.test(email.value))) {
            displayError(errorText[index], input);
            //inputがemailの時テキストを表示
            if (input === email){
                email.placeholder = "email@example.com";
            }
            isValid = false;
        } else {//文字が入力されていたらエラーテキストを非表示
            deleteError(errorText[index], input);
        }
    })


    const checkedRadio = document.querySelector('input[name="query-type"]:checked');
    const checkedBox = document.querySelector('input[name="checkbox"]:checked');
    const buttons = [checkedRadio, checkedBox]
    //ラジオボタンとチェックボックスがチェックされているか確認→その結果でエラーの表示・非表示
    buttons.forEach((button, index)=>{
        //buttonが押されていなかったらエラーテキストを表示
        if(button === null){
            displayError(errorText2[index]);
            isValid = false;
        } else {//buttonが押されていたらエラーテキストを非表示
            deleteError(errorText2[index]);
        }
    })


//すべてエラーがなければsendMessageを表示
    if (isValid){
        sendMessage.classList.add("block");
        //sendMessageが表示されたら画面が一番上にスクロールされる
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});


//エラー表示
const displayError = (text, input=null)=> {
    //ラジオボタンとチェックボックスをはじくためのif文
    if (input !== null){
        //error-borderのクラスをつける：inputの枠が赤くなる
        input.classList.add("error-border");
    }
    //blockのクラスをつける：inputの枠の色が初期状態になる
    text.classList.add("block");
};

//エラー非表示
const deleteError = (text, input=null)=>{
    //ラジオボタンとチェックボックスをはじくためのif文
    if (input !== null){
        //error-borderのクラスをつける：inputの枠が赤くなる
        input.classList.remove("error-border");
    }
    //blockのクラスをつける：inputの枠の色が初期状態になる
    text.classList.remove("block");
};

//空白を削除し中が空かどうか:空白を文字と認識しないようにするため
const trim = (item)=>{
    return item.value.trim() ==="";
}
