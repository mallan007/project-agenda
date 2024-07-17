# project-agenda

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Config backend
npm install json-server

npm run backend

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

#### Retornar o nome dos contatos
<select> 
    <option v-for="contact in contacts" :key="contact.id" value="contact.name"> {{ contact.name }} </option>
</select>

#### Configurar o details. Exemplo de HTML:
https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_details_css

#### Link de base para a construção do projeto:


#### DAshboard atualizado:
<template>
    <div id="contactName-table">

    <div id="contactName-header">
        <div> Nome: </div> 
        <div> Número de Telefone: </div>
        <div> Endereço: </div> 
        <div> E-mail: </div> 
        <div></div>
      <div id="contactName-table-rows">
        <div class="contactName-table-row" v-for="contact in contacts" :key="contact.id">
            <div> {{ contact.name }} </div> 
            <div> {{ contact.cellNumber }} </div>
            <div> {{ contact.address }} </div> 
            <div> {{ contact.email }} </div> 
            <div>
                <button class="btn-edit" @change="updateContact($event, contact.id)">Editar Contato</button>
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
            contacts_id: String
        } 
    },
    methods:{
        async getContacts() {
        const req = await fetch("http://localhost:3000/contacts");
        const data = await req.json();
        this.contacts = data;
        
        console.log(this.contacts);
        },
        async getNewContacts() {
        const req = await fetch("http://localhost:3000/newContacts");
        const data = await req.json();
        this.newContacts = data;
        
        console.log(this.newContacts);
        },
        async deleteContact(id) {
            console.log(id);
            const req = await fetch (`http://localhost:3000/contacts/${id}`, {
                method: "DELETE"
            });
            const res = await req.json(); 

            this.getContacts();
        }/*,
        async updateContact(event, id){ //Editar Contatos
            console.log(id);
            const req = await fetch (`http://localhost:3000/contacts/${id}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            });
            const res = await req.json(); 
            console.log(res);

            this.msg = `O contato ${res.name} foi atualizado.`;
            setTimeout(() => this.msg = "", 3000);

            this.getContacts();
        }*/
    },
    mounted(){
        this.getContacts();
        this.getNewContacts();
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
    display: flex;
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
