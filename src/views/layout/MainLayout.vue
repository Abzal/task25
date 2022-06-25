<template>
    <div>
        <HeaderSlot/>
        <div class="container">
            <router-view/>
        </div>

    </div>
</template>

<script>
    import HeaderSlot from "@/views/layout/Header";
    export default {
        name: "MainLayout",
        components: {HeaderSlot}
    }
</script>

<style scoped>
    .container {
        margin: 20px;
    }
</style>
