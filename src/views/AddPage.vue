<template>
    <div class="main-container">
      <h1> Adicionar Contatos </h1>
      <div>
         <ContactForm />
      </div>
      
    </div>  
  </template>
  
  <script lang="ts">
import ContactForm from '@/components/ContactForm.vue';

  export default {
    name: 'AddPage',
    data(){
      return{
        contacts: String
      }
    },
    components: {
      ContactForm
    }
  }    
  </script>
  
  <style scoped>
 
  </style>
  