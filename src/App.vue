<template>
  <div id="app">
    <Presentation />
    <Graph-01 />
    <Graph-02 />
    <Graph-03 />
    <Graph-04 />
  </div>
</template>

<script>
import Presentation from './components/Presentation.vue'
import Graph01 from './components/Graph-01.vue'
import Graph02 from './components/Graph-02.vue'
import Graph03 from './components/Graph-03.vue'
import Graph04 from './components/Graph-04.vue'

export default {
  name: 'App',
  components: {
    Presentation,
    Graph01,
    Graph02,
    Graph03,
    Graph04,
  }
}
</script>

<style>
@import "./assets/mainStyle.css";

html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Futura, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

div[class*="Graph"] { text-align: center }
.dark * { color: var(--primary-white) }

</style>
