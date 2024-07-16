<template>
  <NavBar :logo="logo_src" :alt="app_name"/>
  <router-view/>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
  
export default{
  components:{
    NavBar,
    Footer
  },
  data(){
    return {
      logo_src: "/img/logo.png",
      app_name: "Agenda" 
    }
  }
}
</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app{
  background-color: rgba(89, 86, 82, 0.274);
  color:black;
}
.main-container{
  margin: 50px;
  min-height: 250px;
}
h1{
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
  color: black;
}
</style>
