<template>
  <div class="Graph01" id="first-data">
    <h2 class="subtitle" >Quelques chiffres depuis le début....</h2>
    <p class="text">Nombre d’hommes et de femmes recrutés dans les métiers de l’aérospatiale dans le monde</p>
    <div class="container">
      <canvas></canvas>
    </div>
    <div class="more button" val="0">
      En voir plus
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Graph01',
  data: () => ({
    planetChartData : {
      type: "bar",
      options: {
        x: {
          type: 'number',
          easing: 'linear',
          duration: 2000,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false }
          },
          y: {
            grid: { display: false },
            ticks: {
              beginAtZero: true
            }
          }
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: {
                size: 22,
              },
              padding: 50,
              usePointStyle: true,
            },
          }
        }
      }
    }
  }),
  mounted() {
    let button = document.querySelector('.more.button')
    const ctx = document.querySelector('.Graph01 .container canvas');
    
    const test = (nb) => {
      let canvas = ctx.getContext("2d")
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

    let data1 = {
      labels: ["1960", "1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015", "2020"],
      datasets: [
        {
          label: "Homme",
          data: [8, 11, 24, 16, 31, 55, 42, 46, 25, 7, 10, 16, 21, 12],
          backgroundColor: test(0),
        },
        {
          label: "Femme",
          data: [0, 0, 0, 0, 3, 8, 13, 18, 12, 2, 4, 8, 7],
          backgroundColor: test(1),
        }
      ]
    }

    let data2 = {
      labels: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"],
      datasets: [
        {
          label: "Homme",
          data: [14, 19, 16, 16, 10, 10, 10],
          backgroundColor: test(0),
        },
        {
          label: "Femme",
          data: [2, 2, 5, 1, 2, 2],
          backgroundColor: test(1),
        }
      ]
    }

    this.planetChartData.data = data1
    let chart
    window.addEventListener('scroll', () => {
      if (ctx.getClientRects()[0].top - window.innerHeight / 2 < 0) {
        chart = new Chart(ctx, this.planetChartData);
      }
    });
    if (ctx.getClientRects()[0].top - window.innerHeight / 2 < 0) {
      chart = new Chart(ctx, this.planetChartData);
    }

    function changeData(check) {
      if (check == "0") {
        chart.data = data2
        button.setAttribute('val', 1)
      }
      if (check == "1") {
        chart.data = data1
        button.setAttribute('val', 0)
      }
      chart.update();
    }

    button.addEventListener('click', () => {
      changeData(button.getAttribute('val'))
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

.Graph01 .text {
  max-width: 750px;
  margin: 0 auto;
  padding: 0 8px;
}

.Graph01 .container {
  width: 90%;
  padding-left: 5%;
  margin-top: 40px;
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
