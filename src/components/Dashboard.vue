<template>
<h1> Detalhes do contato </h1>
    <div id="contactName header">
    <div>Nome:</div>
    <div>Telefone:</div> 
    <div>Endereço:</div>
    <div>E-mail:</div>
    <div id="contactName-table-rows">
        <div class="contactName-table-row">
        <details>
            <summary>
                <img src="../assets/down-arrow.png">
            </summary>
            <button class="btn-edit"> Editar Contato </button>
            <button class="btn-delete"> Excluir Contato </button>
        </details>
        </div>
    </div> 
    </div>
</template>

<script>
    export default{
        name: 'Dashboard',
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