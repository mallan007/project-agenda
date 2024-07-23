<template>
    <div class="main-container">
      <h1> Editar Contato </h1>
      <div>
        <Dashboard />
      </div>
      
    </div>  
  </template>
  
  <script lang="ts">
import Dashboard from '@/components/Dashboard.vue';



  
  export default {
    name: 'AddPage',
    data(){
      return{
        contacts: String
      }
    },
    components: {
      Dashboard
    },
    
  }    
  </script>
  
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  