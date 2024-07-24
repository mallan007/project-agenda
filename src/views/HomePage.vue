<template>
  <div id="btn-add-link"> 
    <router-link to="/add"> <h2>Adicionar novo contato</h2> </router-link> <!--Colocar isso aqui num Navbar ou Header-->
  </div>
    <div class="main-container">
      <div id="contactName-table">
        <h1>Lista de Contatos:</h1>
      </div>    
  <div id="contactName-header">
    <div id="contactName-table-rows">
        <div class="contactName-table-row" v-for="contact in contacts" :key="contact.id">
          <div> 
            {{ contact.name }} 
          </div> 
          <div>
              <router-link  :key="contact.id"
                             to="/details:id"> 
                 <button class="btn-details" @click="detailsContact(contact.id)"> Exibir Detalhes </button>  
              </router-link>
          </div> 
        </div>
    </div> 
  </div>
  </div>
   
  </template>
  
  <script>
  export default {
    name: 'HomePage',

    data(){
          return {
              contacts: String
          } 
      },
      methods:{
          async getContacts() {
          const req = await fetch("http://localhost:3000/contacts");
          const data = await req.json();
          this.contacts = data;
          
          console.log(this.contacts);
          },
          async detailsContact(id) {
              console.log(id);
              const req = await fetch (`http://localhost:3000/contacts/${id}`, {
                  method: "PATCH"
              });
              const res = await req.json(); 
  
              this.getContacts(); // Retorna à página inicial
          },
      },
      mounted(){
          this.getContacts();
      },
  }
  </script>
  
  <style scoped>
  #contactName-table {
      max-width: 500px;
      margin: 0 auto;
  }
  #contactName-table-header, 
  #contactName-table-rows,
  .contactName-table-row{
      display:list-item;
      flex-wrap: wrap;
  }
  #contactName-table-header{
      font-weight: bold;
      padding: 12px;
      border-bottom: 3px solid black;
  }
  .contactName-table-row{
      width: 100%;
      padding: 12px;
      border: 1px solid antiquewhite;
  }
  .btn-details{
      background-color: rgba(171, 230, 235, 0.246);
      color: rgb(188, 36, 173);
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
  #btn-add-link {
      max-width: 500px;
      margin: 0 auto;
      font-weight: bold;
      padding: 12px;
      text-align: center;
      font-size: 20px;
      margin-bottom: 30px;
      color: black;
  }
  </style>