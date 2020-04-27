<template>
  <div id="app" class="container-fluid">
    <Header v-bind:loggedIn="this.logged"/>
    <router-view :username="user" ></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data(){
    return { logged: false,
             user: '' };
  },
  created(){
    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    this.logged = getCookie('session') !== "";
    this.user = getCookie('user');
  }
}

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html, body {
  background-color: #fff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}
#app {
  padding: 0;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
