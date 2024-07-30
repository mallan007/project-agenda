<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
     <router-link to="/">Página Inicial</router-link> 
     <!-- Exibir Detalhes (v-show com todos os atributos do formulário)
     <router-link to="/details/:id">Detalhes do Contato</router-link-->
     <router-link to="/add">Adicionar Contato</router-link> 
     <!-- Editar Contatos, com botões de Salvar e Excluir (receber ID-->
     <router-link to="/edit/:id">Editar Contato</router-link>
    </div>
   </template>

    <script>
        export default {
            name: 'NavBar',
            props: ["logo", "alt"]
        }
    </script>
    
    <style scoped>
    #nav {
        background-color: rgba(89, 86, 82, 0.274);
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #nav a{
        color: rgb(188, 36, 173);
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover {
        color:aquamarine;

    }
    #nav #logo-url{
        margin:auto;
        margin-left: 0;
    }

    #logo{
        width: 25px;
        height: 25px;
    }
    </style>