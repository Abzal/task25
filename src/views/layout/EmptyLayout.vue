<template>
    <div class="body">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "EmptyLayout"
    }
</script>

<style scoped>
    .body{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
    }
</style>
