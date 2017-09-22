// LOG IN COMPONENT

'use strict'

Vue.component('log-in', {
    template: `
                <form class="logIn-container">

                    <h1>Log In</h1>

                    <input id="userName" type="text" placeholder="User Name">

                    <input id="userPassword" type="password" placeholder="User Password">
                        
                    <a href="#">Forgot Password?</a>

                    <input id="submitBtn" type="submit" value="submit">
                
                </form>

              `,
});

var logIn = new Vue({
    el: '#logIn',
});

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', function() {
    checkPassword();
});

   function checkPassword() {
            
            event.preventDefault();
            
            let felixName = "felixtalla";
            let felixPassword = "felix123456";
            let password = document.getElementById('userPassword').value;
            let username = document.getElementById('userName').value;
            
            if(password == felixPassword && username == felixName) {
                window.location.replace('dashboard.html');
            }else {
                alert('Hi Andrew, here are the login details: felixtalla, felix123456')
            }
            
        };
    
