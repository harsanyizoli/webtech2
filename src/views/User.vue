<template>
    <div class="container users">
        <p class="display-4">User setting</p>
        <form >
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="regUsername" v-model="user.name" readonly>
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" v-model="user.email">
              </div>
              <div class="form-group">
                <label for="regPassw">Password</label>
                <input type="password" class="form-control" id="regPassw" v-model="user.passw">
              </div>
              <button type="submit" class="btn btn-primary" @click="updateUser">Update</button>
              <button class="btn btn-primary btn-danger" @click="deleteUser">Delete</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'User',
    data: () => {
        return {
            user: {
                email: '',
                name: '',
                passw: ''
            }
        }
    },
    created(){
        console.log(document.cookie);
        axios.get('/api/getUser', {withCredentials: true}).then(res => {
            console.log(res);
            this.user.email = res.data.email;
            this.user.name = res.data.username;
        });
    },
    methods: {
        updateUser(){
            console.log('updating user');
            axios.post('/api/updateUser', {
                username: this.user.name,
                email: this.user.email,
                password: this.user.passw
            }).then(res => {
                console.log(res);
            })
        },
        deleteUser(){
            console.log('deleting user');
            axios.delete('/api/deleteUser', {
                params: {username: this.user.name}
            }).then(res => {
                console.log(res);
                window.location = '/';
            })
        }
    }
}
</script>
<style scoped>
.users {
    margin-top: 40px;
}
button {
    margin-right: 20px;;
}
</style>