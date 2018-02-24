<template>
  <div id="app">
    <Hero />
    <div class="container main">
      <div class="columns">
      <Panel title="Back-log" color="red" :data="backlog" class="column" />
      <Panel title="To-do" color="orange" :data="todo" class="column" />
      <Panel title="Doing" color="hsl(204, 86%, 53%)" :data="doing" class="column" />
      <Panel title="Done" color="green" :data="done" class="column" />
      </div>
    </div>
    <Button />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Panel from './components/Panel.vue'
import Button from './components/Button.vue'

export default {
  name: 'app',
  data() {
    return {
      backlog: null,
      todo: null,
      doing: null,
      done: null,
    }
  },
  firebase () {
    return {
      backlog: this.$db.ref('backlog'),
      todo: this.$db.ref('todo'),
      doing: this.$db.ref('doing'),
      done: this.$db.ref('done')
    }
  },
  components: {
    Hero,
    Panel,
    Button
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
