<template>
  <div id="app">
    <Stars></Stars>
  </div>
</template>

<script>
import Stars from './components/Stars.vue'


export default {
  name: 'App',
  components: {
    Stars
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
  margin-top: 60px;
}
</style>
