<template>
    <div id="contactName-table">
    <div id="contactName-header">
      <div id="contactName-table-rows">
        <div class="contactName-table-row" v-for="contact in contacts" :key="contact.id ">
            <id>ID: {{ contact.id }} </id>
            <div>Nome: {{ contact.name }} </div> 
            <div>Número de Telefone: {{ contact.cellNumber }} </div>
            <div>Endereço:  {{ contact.address }} </div> 
            <div>E-mail: {{ contact.email }} </div> 
            <div>
                <button class="btn-edit" @click="updateContact(contact.id)">Editar Contato</button>
                <button class="btn-delete" @click="deleteContact(contact.id)"> Excluir Contato </button> 
            </div>
        </div>
      </div> 
    </div>
</div>
</template>

<script>
export default{
    name: 'Dashboard',
    data(){
        return {
            contacts: String,
            contacts_id: Number | String,
            contactsData:[]
        } 
    },
    methods:{
        async getContacts() {
        const req = await fetch("http://localhost:3000/contacts");
        const data = await req.json();
        this.contacts = data;
        
        console.log(this.contacts);
        },
        async deleteContact(id) {
            console.log(id);
            const req = await fetch (`http://localhost:3000/contacts/${id}`, {
                method: "DELETE"
            });
            const res = await req.json(); 

            this.getContacts();
        },
        async updateContact(id){ 
            console.log(id);
            const req = await fetch (`http://localhost:3000/contacts/${id}`, {
                method: "PATCH"
            });
            const res = await req.json(); 

            this.getContacts();
                                 //Editar Contatos
            //this.$route.push({name:"Contato", params: {data: name, cellNumber, address, email}});

            // msg de att
            this.msg = `O contato ${res.name} foi atualizado.`;
            setTimeout(() => this.msg = "", 3000);

            this.getContacts();
        }
    },
    mounted(){
        this.getContacts();
    }
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