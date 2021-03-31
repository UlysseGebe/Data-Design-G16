<template>
  <div class="Graph02 dark">
    <h2 class="title" >Nombre de femmes dans la NASA</h2>
    <p class="text">Depuis le début de l'exploration spatiale, il y a eu un total de 64 femmes et de 505 hommes qui ont participé à des missions spatiales.</p>
    <div class="container">
      <canvas></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

const test = (nb) => {
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
}

export default {
  name: 'Graph02',
  data: () => ({
    planetChartData : {
      type: "line",
      data: {
        labels: ["1960", "1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015", "2020"],
        datasets: [
          {
            label: "Femme",
            data: [0, 28, 23, 11, 78, 23, 11, 78, 13, 1, 28, 23, 11],
            backgroundColor: test(1),
            borderWidth: 0,
            lineTension: 0,
            pointRadius: 0,
          },
          {
            label: "Homme",
            data:  [100, 82, 27, 14, 82, 27, 14, 82, 27, 14, 82, 27, 14],
            backgroundColor: test(0),
            borderWidth: 0,
            lineTension: 0,
            pointRadius: 0,
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: { display: false },
        scales: {
          xAxes: [ { ticks: { fontColor: "#FFFFFF" } } ],
          yAxes: [ { ticks: { fontColor: "#FFFFFF" } } ],
        }
      }
    }
  }),
  mounted() {
    const ctx = document.querySelector('.Graph02 .container canvas');

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
.Graph02 {
  width: 100%;
  height: fit-content;
  padding: 169px 0 190px 0;
  background-color: var(--secondary-dark);
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.Graph02::before,
.Graph02::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  background-color: var(--primary-white);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.Graph02::before {
  position: absolute;
  top: 0;
  height: 124px;
  background-image: url('../assets/images/backgroundTop.svg');
}

.Graph02::after {
  position: absolute;
  bottom: 0;
  height: 104px;
  background-image: url('../assets/images/backgroundBottom.svg');
}

.Graph02 .container {
  width: 90%;
  /* padding-left: 5%; */
  margin-top: 40px;
}

.Graph02 .container canvas {
  width: 100% !important;
}

p {
  max-width: 630px;
}

</style>
