<template>
  <div id="btn-add-link">
    <router-link to="/add"> <h2>Adicionar novo contato</h2> </router-link>
  </div>
  <div class="main-container">
    <div id="contactName-table">
      <h1>Lista de Contatos:</h1>
    </div>
    <div id="contactName-header">
      <div id="contactName-table-rows">
        <div
          class="contactName-table-row"
          v-for="contact in contacts"
          :key="contact.id"
        >
          <div class="contactName-table-cell">
            {{ contact.name }}
            <router-link :to="'/details/'+contact.id">
            <button class="btn-details">
              Exibir Detalhes
            </button> 
            </router-link>
            <div id="show-details" v-if="isClicked" :key="contact.id">
              <div class="editor">
                ID: {{ contact.id }}</div>
              <div class="editor" >
                Nome: {{ contact.name }}
              </div>
              <div class="editor">
                Número de Telefone: {{ contact.cellNumber }}
              </div>
              <div class="editor">
                Endereço: {{ contact.address }}
              </div>
              <div class="editor">
                E-mail: {{ contact.email }}
              </div>
              <div>
                <router-link :to="'/edit/'+contact.id">
                  <button class="btn-edit">Editar Contato</button>
                </router-link>
                <button class="btn-delete" @click="deleteContact(contact.id)">
                  Excluir Contato
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      contacts: Array | Object,
      isClicked: Boolean = false,
    };
  },
  methods: {
    async getContacts() {
      const req = await fetch("http://localhost:3000/contacts");
      const data = await req.json();
      this.contacts = data;

      this.name = data.name;
      this.cellNumber = data.cellNumber;
      this.address = data.address;
      this.email = data.email;

      console.log(this.contacts);
    },

    async detailsContact(id) {
      
      console.log("ID de detalhes: "+id);
      
      const data = {
        id: this.$route.params.id,
        name: this.name,
        cellNumber: this.cellNumber,
        address: this.address,
        email: this.email,
      };
 
     this.isClicked = true;
    },
    async deleteContact(id) {
      const req = await fetch(`http://localhost:3000/contacts/${id}`, {
        method: "DELETE",
      });
      const res = await req.json();

      alert(`${res.name} foi excluído com sucesso.`);

      this.getContacts();
    },
  },
  mounted() {
    this.getContacts();
  },
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
.btn-details {
  background-color: rgba(171, 230, 235, 0.246);
  color: rgb(188, 36, 173);
  border: 2px solid black;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
.btn-details:hover {
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
