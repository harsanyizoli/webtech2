<template>
    <div>
        <nav class="navbar">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <router-link class="nav-link" to='/'>Home</router-link>  
              </li>
              <li class="nav-item" v-if="loggedIn">
                <router-link class="nav-link" to="/user">User</router-link>  
              </li>
              <li class="nav-item" v-else>
                <router-link class="nav-link" to="/login">Login</router-link>  
              </li>
              <li class="nav-item" v-if="loggedIn">
                <router-link class="nav-link" to="/items">Items</router-link>  
              </li>
            </ul>
            <form class="form-inline" v-if="loggedIn">
              <button class="btn btn-outline-success my-2 my-sm-0" @click="logout">Logout</button>
            </form>
        </nav>
    </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    'loggedIn': Boolean,
    'user': String
  },
  methods: {
    logout(){
      document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; 
      document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location = '/';
    }
  }
}
</script>
<style>
nav {
  background-color: rgba(0, 0, 0, 0.8);
}
a {
  color: white;
  text-decoration: none;
}
a:hover  {
  color: lightgray;
}
</style>