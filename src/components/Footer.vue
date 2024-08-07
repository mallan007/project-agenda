<template>
    <footer id="footer">
       <ButtonVoltar />
    </footer>

   </template>

   <script>
    import ButtonVoltar from './ButtonVoltar.vue';

    export default{
        name: "Footer",
        components:{
            ButtonVoltar
        },
    }

    </script>
    
    <style scoped>
    #footer{
        height: 100px;
        background-color: rgba(89, 86, 82, 0.274);
        border-top: 4px solid #111;
        color: rgb(188, 36, 173);
        display: flex;
        align-items: center;
        justify-content: center;
        bottom: 0;
        width: 100%;
    }
    </style>