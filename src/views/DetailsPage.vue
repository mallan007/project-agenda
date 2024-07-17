<template>
    <div class="main-container">
      <Dashboard />
    </div>  
  </template>
  
  <script lang="ts">
import Dashboard from '@/components/Dashboard.vue';


  export default {
    name: 'DetailsPage',
    components:{
      Dashboard
    },
    methods:{
      // Desenvolver lógica de emits

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
  