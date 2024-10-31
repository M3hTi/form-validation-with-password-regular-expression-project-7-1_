const subBtn = document.querySelector(".save-button");
// console.log(subBtn);
const errorMsg = document.querySelector(".error-msg");

const form = document.querySelector("#form");

function submitForm(e) {
    e.preventDefault();
    const passElement = form.querySelector("#password")
    // console.log(passElement);
    const passValue = passElement.value;
    const regex1 = /[A-Z]/;
    const regex2 = /[0-9]/;
    const regex3 = /[\!\@\#\$\%]/;
    try {
        if(passValue === '') throw 'Password is required';
        else if(passValue.length < 8) throw 'Password must be at least 8 characters';
        else if(!regex1.test(passValue)) throw 'Password must contain at least one uppercase letter';
        else if(!regex2.test(passValue)) throw 'Password must contain at least one number';
        else if(!regex3.test(passValue)) throw 'Password must contain at least one special character(!@#$%)';
        form.submit();
        errorMsg.textContent = '';
    } catch (error) {
        errorMsg.textContent = error;
    }
}







subBtn.addEventListener("click", submitForm);