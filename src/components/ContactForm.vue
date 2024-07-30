<template>
    <div> 
        <Message :msg="msg" v-show="msg" />
    </div>
    <div>
        <form id="contact-form" @submit="addContact">
            <div class="input-container">
                <label for="name"> Nome do Contato: </label>
                <input type="text" id="name" name="name" v-model="name" placeholder="Digite o Nome">                               
            </div>
            <div class="input-container">
                <label for="cellNumber"> Número de Telefone: </label>
                <input type="text" id="cellNumber" name="cellNumber" v-model="cellNumber" placeholder="Digite o Telefone">
            </div>
            <div class="input-container">
                <label for="address"> Endereço: </label>
                <input type="text" id="address" name="address" v-model="address" placeholder="Digite o Endereço">
            </div>
            <div class="input-container">
                <label for="email"> E-mail: </label>
                <input type="text" id="email" name="email" v-model="email" placeholder="Digite o E-mail">
            </div>
            <div>
                <button class="btn-add"> Adicionar Contato </button>
            </div>
        </form>
    </div>
</template>

<script>
import Message from './Message.vue';
//import contacts from 'agenda.json';

export default{
    name: 'ContactForm',
    data(){
        return {
            name: "",
            cellNumber: "",
            address: "",
            email: "",
            msg: ""
        }
    },/*
    props: [
       id == {type: String|Number, required: true}
    ],
     created() {
      this.contacts_id = this.$route.params.id;
    },
    computed: {
        contactId() {
            return parseInt(this.route.params.id);
        },
        contact() {
        return agenda.contact.find(
        (contact) => contact.id === this.id
        )}
    },*/
    components:{
        Message,
    },
    methods: {
        async getContacts() { //Aqui pega os dados
            const req = await fetch("http://localhost:3000/contacts");
            const data = await req.json();

            this.name = data.name;
            this.cellNumber = data.cellNumber;
            this.address = data.address;
            this.email = data.email;
        },
        async addContact(e) {
            
            e.preventDefault();

            const data = {
                name: this.name,
                cellNumber: this.cellNumber,
                address: this.address,
                email: this.email
            }
            const dataJson = JSON.stringify(data);
            const req = await fetch("http://localhost:3000/contacts", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJson
            });
            const res = await req.json();
            // colocar uma msg de sistema
            alert(`${res.name} foi adicionado a sua lista de contatos.`);
            //router.replace('/home');
            this.$router.push('/');
        }
    },
    mounted() {
        this.getContacts();
    },
}
</script>

<style scoped>
#contact-form {
    max-width: 400px;
    margin: 0 auto;
}
.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
label{
    font-weight: bold;
    margin-bottom: 15px;
    color: solid black;
    padding: 5px 10px;
    border-left: 4px solid rgb(188, 36, 173);
    color: rgb(188, 36, 173);
}
input{
    padding: 5px 10px;
    width: 300px;
}
.btn-add{
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
.btn-add:hover{
    background-color: transparent;
    color: rgba(61, 18, 231, 0.864);
}
</style>