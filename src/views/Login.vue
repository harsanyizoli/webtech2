<template>
    <div>
    <div class="row container">
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
            }
        }
    },
    methods: {
        login(){
            console.log(this.loginForm.username);
            axios.post('/login', {
                username: this.loginForm.username,
                password: this.loginForm.passw,
            }).then(response => {
                console.log(response);
                window.location = "/";
            });
            this.loginForm = {};
        },
        register(){
            event.preventDefault();
            console.log(this.regForm);
            axios.post('/register', {
                username: this.regForm.username,
                password: this.regForm.passw,
                email: this.regForm.email
            }).then(response => {
                console.log(response);
                window.location = "/";
            });
            this.regForm = {};
        }
    }
}
</script>

<style>
    .row {
        margin: auto;
        margin-top: 60px;
    }
    #loginForm {
        border-right: 1px solid rgba(0, 0, 0, 0.5);
    }
</style>