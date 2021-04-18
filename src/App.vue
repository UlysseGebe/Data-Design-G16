<template>
  <div id="app">
    <Presentation />
    <Graph-01 :dataGraph01_Woman="this.woman" :dataGraph01_Man="this.man" :dataGraph01_Woman2="this.woman2" :dataGraph01_Man2="this.man2" />
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
    'dataGraph01_Woman',
    'dataGraph01_Man',
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

    const getWoman = () => {
      let dates = {"1965": [0, 0], "1970": [0, 0], "1975": [0, 0], "1980": [0, 0], "1985": [0, 0], "1990": [0, 0], "1995": [0, 0], "2000": [0, 0], "2005": [0, 0], "2010": [0, 0], "2015": [0, 0], "2020": [0, 0]}
      for (let i = 0; i < dataJson.length; i++) {
        const data = dataJson[i];
        let secondTab = data.Flights.split(/\(([^()]+)\)/);
        for (let j = 0; j < secondTab.length; j++) {
          const int = secondTab[j];
          for (const key in dates) {
            if (Object.hasOwnProperty.call(dates, key)) {
              if (parseInt(key) == parseInt(int)) {
                if (data.Gender == "Woman") {
                  dates[key][0] += 1
                }
                if (data.Gender == "Man") {
                  dates[key][1] += 1
                }
              }
            }
          }
        }
      }
      let man = {}
      let woman = {}
      for (const key in dates) {
        if (Object.hasOwnProperty.call(dates, key)) {
          const element = dates[key];
          woman[key] = element[0]
          man[key] = element[1]
        }
      }
      this.man = man
      this.woman = woman
    }
    getWoman()
    
    const getWoman2 = () => {
      let dates = {"2014": [0, 0], "2015": [0, 0], "2016": [0, 0], "2017": [0, 0], "2018": [0, 0], "2019": [0, 0], "2020": [0, 0]}
      for (let i = 0; i < dataJson.length; i++) {
        const data = dataJson[i];
        let secondTab = data.Flights.split(/\(([^()]+)\)/);
        for (let j = 0; j < secondTab.length; j++) {
          const int = secondTab[j];
          for (const key in dates) {
            if (Object.hasOwnProperty.call(dates, key)) {
              if (parseInt(key) == parseInt(int)) {
                if (data.Gender == "Woman") {
                  dates[key][0] += 1
                }
                if (data.Gender == "Man") {
                  dates[key][1] += 1
                }
              }
            }
          }
        }
      }
      let man = {}
      let woman = {}
      for (const key in dates) {
        if (Object.hasOwnProperty.call(dates, key)) {
          const element = dates[key];
          woman[key] = element[0]
          man[key] = element[1]
        }
      }
      
      this.man2 = man
      this.woman2 = woman
    }
    getWoman2()
  }
}
</script>

<style>
@import "./assets/mainStyle.css";

html, body {
  margin: 0;
  padding: 0;
  min-width: 700px;
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

.customTool {
  transition: opacity 0.5s ease;
}

div[class*="Graph"] { text-align: center }

div[class*="Graph"], #Presentation {
  padding-left: 24px !important;
  padding-right: 24px !important;
}
.dark * { color: var(--primary-white) }

</style>
