<template>
  <div id="contactName-table">
    <div id="contactName-header">
      <div id="contactName-table-rows">
        <div class="contactName-table-row" :key="contacts.id">
          <div>ID: {{ contacts.id }}</div>
          <div>Nome: {{ contacts.name }}</div>
          <div>Número de Telefone: {{ contacts.cellNumber }}</div>
          <div>Endereço: {{ contacts.address }}</div>
          <div>E-mail: {{ contacts.email }}</div>
          <div>
            <router-link :to="'/edit/'+contacts.id"><button class="btn-edit">Atualizar Contato</button></router-link>
              <!--button class="btn-edit" @click="editContact(contacts.id)">Editar Contato</button-->
            
            <button class="btn-delete" @click="deleteContact(contacts.id)">
              Excluir Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      contacts: Array | Object,
    };
  },
  mounted() {
    this.getContacts();
  },
  data() {
    return {
      contacts: String,
    };
  },
  methods: {
    async getContacts() {
      const req = await fetch(`http://localhost:3000/contacts/${this.$route.params.id}`); //Linha apresentando erro de variável não declarada
      const data = await req.json();
      this.contacts = data;

      console.log(this.contacts);
    },
    async deleteContact(id) {
      console.log(id);
      const req = await fetch(`http://localhost:3000/contacts/${id}`, {
        method: "DELETE",
      });
      const res = await req.json();

      alert(`${res.name} foi excluído com sucesso.`);

      this.getContacts();
    },
  },
  async editContact(id) {
      
      console.log("ID de detalhes: "+id);
      
      const data = {
        id: this.$route.params.id,
        name: this.name,
        cellNumber: this.cellNumber,
        address: this.address,
        email: this.email,
      };
  }
};
</script>

<style scoped>
#contactName-table {
  max-width: 500px;
  margin: 0 auto;
}
#contactName-table-header,
#contactName-table-rows,
.contactName-table-row {
  display: list-item;
  flex-wrap: wrap;
}
#contactName-table-header {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid black;
}
.contactName-table-row {
  width: 100%;
  padding: 12px;
  border: 1px solid antiquewhite;
}
.btn-delete,
.btn-edit {
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
.btn-edit:hover {
  background-color: transparent;
  color: rgba(61, 18, 231, 0.864);
}
</style>
