<template>
  <div id="app">
    <Presentation />
    <Graph-01 />
    <Graph-02 />
    <Graph-03 :dataGraph03="this.getWomanByCountry" />
    <Graph-04 />
    <Graph-05 />
  </div>
</template>

<script>
import Presentation from './components/Presentation.vue'
import Graph01 from './components/Graph-01.vue'
import Graph02 from './components/Graph-02.vue'
import Graph03 from './components/Graph-03.vue'
import Graph04 from './components/Graph-04.vue'
import Graph05 from './components/Graph-05.vue'

import dataJson from './assets/International_Astronaut_Database.json'

export default {
  name: 'App',
  components: {
    Presentation,
    Graph01,
    Graph02,
    Graph03,
    Graph04,
    Graph05,
  },
  props: [
    'dataGraph03'
  ],
  beforeMount () {
    const getWomanByCountry = () => {
      const countries = {
        'Canada' : [0,0],
        'South Korea' : [0,0],
        'Spain' : [0,0],
        'Iran' : [0,0],
        'France' : [0,0],
        'United States' : [0,0],
        'United Kingdom' : [0,0],
        'Denmark' : [0,0],
        'Soviet Union' : [0,0],
        'Sweden' : [0,0],
        'Cuba' : [0,0],
        'South Africa' : [0,0],
        'Japan' : [0,0],
        'Italy' : [0,0],
        'United Arab Emirates' : [0,0],
        'China' : [0,0],
        'India' : [0,0],
        'Russia' : [0,0]
      }
      for (let i = 0; i < dataJson.length; i++) {
        const data = dataJson[i];
        for (const country in countries) {
          if (Object.hasOwnProperty.call(countries, country)) {
            if (data.Country == country) {
              const gender = countries[country];
              if (data.Gender == "Woman") {
                gender[0] += 1
              }
              if (data.Gender == "Man") {
                gender[1] += 1
              }
            }
          }
        }
      }
      this.getWomanByCountry = countries
    }
    getWomanByCountry()
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

#chartjs-tooltip * {
  font-family: Avenir, Futura, sans-serif;
}

.customTool span {
  font-weight: 900;
  font-size: 30px;
  color: #FFF;
}

div[class*="Graph"] { text-align: center }
.dark * { color: var(--primary-white) }

</style>
