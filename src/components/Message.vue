<template>
    <div class="message-container"> 
        <p> {{ msg }} </p>
    </div> 
</template>

<script>
export default {
    name: 'Message',
    props: {
        "msg" : String,
    }
}

</script>

<style scoped>
.message-container{
    color:rgb(188, 36, 173);
    background-color: rgba(171, 230, 235, 0.246);
    border: 2px solid rgb(149, 162, 162);
    border-radius: 5px;
    padding: 10px;
    max-width: 400px;
    margin: 30px auto;
}
</style>





