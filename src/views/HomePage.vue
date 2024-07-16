<template>
    <div class="main-container">
      <Banner />
    </div>  
    <div id="contactName header">
    <div id="contactName-table-rows">
        <div class="contactName-table-row">
        <details>
           <!--Adicionar a lista de contacts.name para exibição
            <summary v-for="contact in contacts" :key="contact.id" value="contact.name"> {{ contact.name }}
              -->
              <summary> <!-- Implementar uma função com v-for para mostrar todos os contatos puxando pela chave getContacts() => this.name -->
               <ContactForm :name="name"/>
            </summary>
            <button class="btn-details">Exibir Detalhes</button>
        </details>
        </div>
    </div> 
    </div>
  </template>
  
  <script lang="ts">
  import Banner from '@/components/Banner.vue';
  import ContactForm from '@/components/ContactForm.vue';


  export default {
    name: 'HomePage',
    components: {
      Banner,
      ContactForm
    },
    data(){
      return{

      }
    },
  }
  </script>
  
  <style scoped>
 .btn-details{
    background-color: rgba(171, 230, 235, 0.246);
    color: rgb(188, 36, 173);
    font-weight: bold;
    border: 2px solid black;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;

}
.btn-details:hover{
    background-color: transparent;
    color: rgba(61, 18, 231, 0.864);
}
  </style>
  