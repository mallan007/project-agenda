<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
     <router-link to="/">Página Inicial</router-link> <!-- Criar a Lista de Contatos aqui, já como página inicial, com botão de Exibir Detalhes (v-show com todos os atributos do formulário)-->
     <!--router-link to="/details">Detalhes de todos os Contatos</router-link--><!-- Aqui será a parte de Detalhes, com botões de Editar e Cancelar (Voltar -> Home)-->
     <router-link to="/details">Detalhes do Contato</router-link>
     <router-link to="/add">Adicionar Contato</router-link> <!-- Aqui será a parte de Adicionar Contatos, com botões de Salvar e Cancelar (Voltar->Home e não guardar infos)-->
     <!--router-link to="/edit/:id">Editar Contato</router-link-->
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
        background-color: rgba(138, 133, 133, 0.575);
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