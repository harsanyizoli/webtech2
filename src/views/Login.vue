<template>
    <div>
    <div class="row container">
        <div class="col-12">
            <p class="alert alert-danger" v-bind:class='{hide: !failed}'>Failed</p>
        </div>
       <div id="loginForm" class="col-6">
           <h1>Login</h1>
           <form @submit="login">
              <div class="form-group">
                <label for="loginUsername">Username</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" v-model="loginForm.username">
              </div>
              <div class="form-group">
                <label for="loginPassw">Password</label>
                <input type="password" class="form-control" v-model="loginForm.passw">
              </div>
              <button type="submit" class="btn btn-primary">Log in</button>
            </form>
        </div>
        <div id="registerForm" class="col-6">
            <h1>Register</h1>
            <form @submit="register">
              <div class="form-group">
                <label for="regUsername">Username</label>
                <input type="text" class="form-control" id="regUsername" v-model="regForm.username">
              </div>
              <div class="form-group">
                <label for="regEmail">Email address</label>
                <input type="email" class="form-control" id="regEmail" aria-describedby="emailHelp" v-model="regForm.email">
              </div>
              <div class="form-group">
                <label for="regPassw">Password</label>
                <input type="password" class="form-control" id="regPassw" v-model="regForm.passw">
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div> 
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data: () => {
        return {
            regForm: {
                username: '',
                passw: '',
                email: ''
            },
            loginForm : {
                username: '',
                passw: '',
            },
            failed: false
        }
    },
    methods: {
        login(){
            console.log(this.loginForm.username);
            axios.post('/api/login', {
                username: this.loginForm.username,
                password: this.loginForm.passw,
            }).then(response => {
                console.log(response);
                window.location = "/";
            }).catch(err => {
                console.log(err);
                this.failed = true;
                setTimeout(() => {
                    this.failed = false;
                }, 3000);
            })
            this.loginForm = {};
        },
        register(){
            event.preventDefault();
            console.log(this.regForm);
            axios.post('/api/register', {
                username: this.regForm.username,
                password: this.regForm.passw,
                email: this.regForm.email
            }).then(response => {
                console.log(response);
                window.location = "/";
            }).catch(err => {
                console.log(err);
                this.failed = true;
                setTimeout(() => {
                    this.failed = false;
                }, 3000);
            });
            this.regForm = {};
        }
    }
}
</script>

<style>
.alert {
    text-align: center;
    position: fixed;
    z-index: 999;
    width: 80vw;
    top: 70px;
    left: 10vw;
}
.row {
    margin: auto;
    margin-top: 60px;
}
#loginForm {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
}
.hide {
    display: none;
}
</style>