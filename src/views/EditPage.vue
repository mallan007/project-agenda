<template>
   <div>
        <form id="edit-form" :key="currentContact.id">
            <div class="input-container">
                <label for="name">  {{ currentContact.name }} </label>
                <input type="text" id="currentContact.name" name="currentContact.name">                               
            </div>
            <div class="input-container">
                <label for="cellNumber"> {{ currentContact.cellNumber }} </label>
                <input type="text" id="cellNumber" name="cellNumber">
            </div>
            <div class="input-container">
                <label for="address"> {{ currentContact.address }} </label>
                <input type="text" id="address" name="address">
            </div>
            <div class="input-container">
                <label for="email"> {{ currentContact.email }} </label>
                <input type="text" id="email" name="email">
            </div>
            <div>
                <button class="btn-edit" @click="editContact(currentContact.id)"> Atualizar Contato </button>
                <!--button class="btn-delete" @click="deleteContact(currentContact.id)"> Excluir Contato </button--> 
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type Contact = {
  name: string,
  cellNumber: string,
  address: string,
  email: string,
  id: string
}

export default defineComponent({
  name: 'EditPage',
  data() {
    return {
      contacts: [] as Contact[],
      currentContact: {} as Contact
    }
  },
  mounted() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      const req = await fetch("http://localhost:3000/contacts");
      const data = await req.json();
      console.log(data);
      this.contacts = data as Contact[];
      this.currentContact = this.contacts[0];
      console.log(this.currentContact);
      this.editContact(this.currentContact.id);
    },
    async editContact(id: string) {
      const data = {
        name: this.currentContact.name,
        cellNumber: this.currentContact.cellNumber,
        address: this.currentContact.address,
        email: this.currentContact.email,
        id: this.currentContact.id,
      }

    const req = await fetch (`http://localhost:3000/contacts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    const res = await req.json();
    console.log(res);      
           
    }
  },
      async deleteContact(id: string) {
        const req = await fetch (`http://localhost:3000/contacts/${id}`, {
            method: "DELETE"
        });
        const res = await req.json(); 

        alert(`${res.name} foi excluído com sucesso.`);
        
        this.getContacts();
    },
});

</script>

<style scoped>
#contactName-table {
  max-width: 500px;
  margin: 0 auto;
}
#contactName-table-header, 
#contactName-table-rows,
.contactName-table-row{
  display: list-item;
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