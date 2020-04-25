<template>
  <div id="app" class="container-fluid">
    <Header v-bind:loggedIn="this.logged" />
    <router-view></router-view>
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
    return { logged: false };
  },
  created(){
    var res = "";
    let name = "session=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        res = c.substring(name.length, c.length);
      }
    }
    this.logged = res !== "";
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
