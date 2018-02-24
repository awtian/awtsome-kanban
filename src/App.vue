<template>
  <div id="app">
    <Hero />
    <div class="container main">
      <div class="columns">
      <Panel title="Back-log" color="red" class="column" />
      <Panel title="To-do" color="orange" class="column" />
      <Panel title="Doing" color="hsl(204, 86%, 53%)" class="column" />
      <Panel title="Done" color="green" class="column" />
      </div>
    </div>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Panel from './components/Panel.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Panel
  }
}
</script>

<style>
.main {
  margin-top:33px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
