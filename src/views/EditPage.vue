<template>
   <div>
        <form id="edit-form" @submit="editContact" :key="contacts.id">
            <div class="input-container">
                <label for="name"> {{ contacts.name }} </label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Digite o Nome">                               
            </div>
            <div class="input-container">
                <label for="cellNumber"> {{ contacts.cellNumber }} </label>
                <input type="text" id="cellNumber" name="cellNumber" v-model="cellNumber" placeholder="Digite o Telefone">
            </div>
            <div class="input-container">
                <label for="address"> {{ contacts.address }} </label>
                <input type="text" id="address" name="address" v-model="address" placeholder="Digite o Endereço">
            </div>
            <div class="input-container">
                <label for="email"> {{ contacts.email }} </label>
                <input type="text" id="email" name="email" v-model="email" placeholder="Digite o E-mail">
            </div>
            <div>
                <button class="btn-edit"> Atualizar Contato </button>
            </div>
        </form>
    </div>
</template>

<script>

export default{
  name: 'Dashboard',
  props: {
    contacts: Object
  },
  /*data(){
      return {
          contacts: String
      } 
  },*/
  methods:{
    async editContact(e) {
    
      e.preventDefault();

      const data = {
          name: this.name,
          cellNumber: this.cellNumber,
          address: this.address,
          email: this.email
      }
      const dataJson = JSON.stringify(data);
      const req = await fetch(`http://localhost:3000/contacts/${id}`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: dataJson
      });
      const res = await req.json();
      // colocar uma msg de sistema
      alert(`${res.name} foi atualizado.`);
      //router.replace('/home');
      this.$router.push('/');
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