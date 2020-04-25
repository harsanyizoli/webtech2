<template>
    <div>
        <nav>
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
              <li class="nav-item">
                <router-link class="nav-link" to="/items">Items</router-link>  
              </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
  name: "Header",
  props: {
    'loggedIn': Boolean
  }
}
</script>
<style scoped>
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