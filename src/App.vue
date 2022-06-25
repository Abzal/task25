<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>
<script>
  import EmptyLayout from "@/views/layout/EmptyLayout";
  import MainLayout from "@/views/layout/MainLayout";
  export default {
    components:{
      EmptyLayout,
      MainLayout
    },
    computed: {
      layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
