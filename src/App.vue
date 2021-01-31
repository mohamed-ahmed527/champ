<template>
  <div id="app" style="overflow-x: hidden; !important"  >
    <navbar></navbar>
    <Home></Home>
    <footer-comp></footer-comp>
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/navbar.vue';
import Home from"./components/Home.vue";
import FooterComp from './components/FooterComp.vue';

export default {
  name:"#app",
  components:{Home, Navbar, FooterComp}
}  

</script>
<style lang="scss">
#app{
  margin:0px;
  padding: 0px;
}

</style>
