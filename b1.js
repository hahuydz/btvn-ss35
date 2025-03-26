const emailElement = document.querySelector('#email');
const passwordElement = document.querySelector('#password');
const confirmPassWordElement = document.querySelector('#confirm-password');
const btnRegisterElement = document.querySelector('button');
const accounts = JSON.parse(localStorage.getItem('accounts')) || [];

btnRegisterElement.addEventListener('click', function(event){
    // event.defaultPrevented();

    if(accounts.some(item => item.email === emailElement.value)){
        alert('Tài khoản đã tồn tại');
    }
    else if(passwordElement.value !== confirmPassWordElement.value){
        alert('mật khẩu ko đc trùng khớp');
    }
    else{
        const newAccount = {
            email: emailElement.value,
            password: passwordElement.value,
        }

        accounts.push(newAccount);
        alert('đăng kí tai khoản thành công');
    }

    emailElement.value = '';
    passwordElement.value = '';
    confirmPassWordElement.value = '';

    localStorage.setItem('accounts', JSON.stringify(accounts));
})