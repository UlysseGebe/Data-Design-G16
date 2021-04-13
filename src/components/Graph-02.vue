<template>
  <div class="Graph02 dark">
    <h2 class="title" >Nombre de femmes dans la NASA</h2>
    <p class="text">En 1969, plus d’une centaine d’hommes ont participé à des missions spatiales contre 0 du côté féminin. 
<br/><br/>
Un écart qui s’est de plus en plus réduit ces dernières années, notamment avec un nombre égal d’hommes et de femmes sollicités dans l’industrie en 2013.</p>
    <div class="container">
      <canvas></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Graph02',
  data: () => ({
    planetChartData : {
      type: "line",
      data: {
        labels: ["1969", "1978", "1980", "1984", "1985", "1987", "1990", "1992", "1995", "1996", "1998", "2000", "2004", "2009", "2013", "2017"],
        datasets: [
          {
            label: "Femme",
            data: [0, 17, 11, 17, 15, 13, 22, 16, 26, 23, 12, 18, 18, 33, 50, 45],
            backgroundColor: '#4377D4',
            fill: true,
            borderWidth: 0,
            pointRadius: 0.2,
          },
          {
            label: "Homme",
            data:  [100, 83, 89, 83, 85, 87, 78, 84, 74, 77, 88, 82, 82, 67, 50, 55],
            backgroundColor: '#04BEFE',
            fill: true,
            borderWidth: 0,
            pointRadius: 0.2,
          },
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {legend: { display: false }},
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#FFFFFF" }
          },
          y: {
            grid: { display: false },
            ticks: { color: "#FFFFFF" }
          }
        }
      }
    }
  }),
  mounted() {
    const ctx = document.querySelector('.Graph02 .container canvas');
    const test = (nb) => {
      const canvas = ctx.getContext("2d")
      let gradient = canvas.createLinearGradient(0, 0, 0, window.innerHeight)
    
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

    this.planetChartData.data.datasets[0].backgroundColor = test(1)
    this.planetChartData.data.datasets[1].backgroundColor = test(0)

    new Chart(ctx, this.planetChartData);
    

    window.addEventListener('resize', () => {
      
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
