<template>
  <div class="Graph01" id="first-data">
    <h2 class="title" >Quelques chiffres depuis le début....</h2>
    <p class="text">Nombre d’hommes et de femmes recrutés dans les métiers de l’aérospatiale dans le monde</p>
    <div class="container">
      <canvas></canvas>
    </div>
    <div class="more button">
      En voir plus
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

const test = (nb) => {
  // window.addEventListener('load', () => {
    const canvas = document.querySelector('.Graph01 .container canvas')
    if (!canvas) {
      if (nb == 0) { return "#4377D4" }
      if (nb == 1) { return "#04BEFE" }
    }
    const ctx = canvas.getContext("2d")
    let gradient = ctx.createLinearGradient(0, 0, 0, window.innerHeight)
  
    if (nb == 0) {
      gradient.addColorStop(0, "#4377D4")
      gradient.addColorStop(1, "#3F3F58")
    }
    if (nb == 1) {
      gradient.addColorStop(0, "#04BEFE")
      gradient.addColorStop(1, "#4481EB")
    }
    return gradient
  // })
}

export default {
  name: 'Graph01',
  data: () => ({
    planetChartData : {
      type: "bar",
      data: {
        labels: ["1960", "1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015", "2020"],
        datasets: [
          {
            label: "Homme",
            data: [79, 82, 27, 14],
            backgroundColor: test(0),
          },
          {
            label: "Femme",
            data: [95, 28, 43, 51],
            backgroundColor: test(1),
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        lineTension: 1,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                padding: 25
              }
            }
          ]
        }
      }
    }
  }),
  mounted() {
    const ctx = document.querySelector('.Graph01 .container canvas');

    new Chart(ctx, this.planetChartData);
    console.log(ctx.width);
    // ctx.width += 0

    window.addEventListener('resize', () => {
      // new Chart(ctx, this.planetChartData);
      // console.log(ctx.width);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Graph01 {
  width: 100%;
  height: fit-content;
  padding: 75px 0 8rem 0;
}

.Graph01 .container {
  width: 90%;
  padding-left: 5%;
}

.Graph01 .container canvas {
  width: 100% !important;
}

.more {
  width: fit-content;
  background: linear-gradient(180deg, #00B0FF 0%, #4382EC 100%);
  padding: 18px 80px;
  border-radius: 100px;
  margin: 66px auto 0 auto;
}
</style>
