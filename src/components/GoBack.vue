<!--Renomear para Português-->
<template>
    <span class="btn-go-back">
      <button @click="$router.back()">Cancelar</button>
    </span>
  </template>
  
  <style>
  .btn-go-back{
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
.btn-go-back:hover{
    background-color: transparent;
    color: rgba(61, 18, 231, 0.864);
}
</style>