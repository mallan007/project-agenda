<template>
    <div class="main-container">
      <h1> Adicionar Novo Contato</h1>
      <ContactForm />
    </div>  
  </template>
  
  <script lang="ts">
  import NavBar from './NavBar.vue';
  import ContactForm from '../components/ContactForm.vue';

  export default {
    name: 'AddPage',
    props: {
      msg: String,
    },
    components:{
      ContactForm,
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>
  