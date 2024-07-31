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
          <div class="contactName-table-cell"> 
            {{ contact.name }} 
            <button class="btn-details" @click="detailsContact(contact.id)"> Exibir Detalhes </button>
              <!--router-link :key="contact.id"
                            to="/details/:id"> 
              <button class="btn-details"> Exibir Detalhes </button>                    
              </router-link-->
            <div id="show-details" v-if="isClicked"> 
                <div class="editor" :value="contactId">ID: {{ contact.id }} </div>
                <div class="editor" :value="contactName">Nome: {{ contact.name }} </div> 
                <div class="editor" :value="contactCellNumber">Número de Telefone: {{ contact.cellNumber }} </div>
                <div class="editor" :value="contactAddress">Endereço: {{ contact.address }} </div> 
                <div class="editor" :value="contactEmail">E-mail: {{ contact.email }} </div>
                <div> 
                  <button class="btn-edit" @change="editContact($event, contact.id)"> Editar Contato </button>
                  <button class="btn-delete" @click="deleteContact(contact.id)"> Excluir Contato </button>
                </div> 
            </div>  
            </div>
          </div> 
          
          <div>
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
              contacts: Array | Object,
              isClicked: false
          } 
      },
      methods:{
          async getContacts() {
            const req = await fetch("http://localhost:3000/contacts");
            const data = await req.json();
            this.contacts = data;
            
            this.name = data.name;
            this.cellNumber = data.cellNumber;
            this.address = data.address;
            this.email = data.email;

            console.log(this.contacts);
            //console.log(this.contacts[1].name); 
            //console.log("Nome: "+`${this.contacts[id].name}`);
            //console.log(this.constacts[this.id].name);
          },

          async detailsContact(id) {
          const data = {
              id: this.id,
              name: this.name,
              cellNumber: this.cellNumber,
              address: this.address,
              email: this.email
          }
          /*
          const req = await fetch (`http://localhost:3000/contacts/${id}`, {
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
          });
          const res = await req.json();
*/
          this.isClicked = true;                               
            //console.log("Nome: "+`${this.contacts[this.id].name}`);
          },
          async deleteContact(id) {
            const req = await fetch (`http://localhost:3000/contacts/${id}`, {
                method: "DELETE"
            });
            const res = await req.json(); 

            alert(`${res.name} foi excluído com sucesso.`);
            
            this.getContacts();
        },
        async editContact(event, id) {

          const editor = event.target.value;

          const dataJson = JSON.stringify(
            {contactName: data.name}, 
            {contactCellNumber: cellNumber},
            {contactAddress: address},
            {contactEmail: email}
            );

          const req = await fetch (`http://localhost:3000/contacts/${id}`, {
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json",
                  body: dataJson
              },
              
          });
          const res = await req.json();

          const data = {
              name: this.name,
              cellNumber: this.cellNumber,
              address: this.address,
              email: this.email
          }
            //this.contacts = data;            
            this.isClicked = true;                               
            //console.log("Nome: "+`${this.contacts[this.id].name}`);
          }
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
.btn-delete,
.btn-edit{
    background-color: rgba(171, 230, 235, 0.246);
    color: rgb(188, 36, 173);
    border: 2px solid black;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;
}
.btn-delete:hover,
.btn-edit:hover{
    background-color: transparent;
    color: rgba(61, 18, 231, 0.864);
}
  </style>