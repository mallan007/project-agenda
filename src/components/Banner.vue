<template>
    <div id="main-banner">
        <h1>Todos os contatos</h1>

    </div>
</template>

<script>
    export default{
        name: 'Banner',
    }
</script>

<style scoped>
#main-banner{
    background-image: url('/public/img/contact.png');
    background-position: 0 -250px;
    background-size: cover;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
#main-banner h1{
    color: white;
    align-items: center;
    text-align: center;
    font-size: 40px;
    background-color: blanchedalmond;
    padding: 10px;
}
</style>