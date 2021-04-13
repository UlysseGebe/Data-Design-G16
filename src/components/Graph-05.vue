<template>
  <div class="Graph05">
    <h2 class="title" >Les plus longs vols réalisés par des femmes</h2>
    <p class="text">Voici les plus longs vols réalisés en heures par des femmes dans des satellites ou des fusées, depuis le début de l’aérospatiale.</p>
    <div class="container">
      <canvas></canvas>
    </div>
    <div class="goTo button" @click="scrollTo('Presentation')">
      Retour vers le haut
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'Graph05',
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  },
  data: () => ({
    planetChartData : {
      type: "bar",
      data: {
        labels: ["Chrisitina Koch", "Peggy Whitson", "Anne McClain"],
        datasets: [
          {
            data: [319, 289, 204],
            backgroundColor: "#3F3D56",
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        lineTension: 1,
        scales: {
            x: {
                grid: { display: false },
                display: false
            },
            y: {
                grid: { display: false },
                ticks: {
                    font: {
                        family: "Avenir",
                        weight: 900,
                        size: 40,
                    },
                    color: "#3F3D56",
                    padding: 50,
                }
            }
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                enabled: false,
            }
        },
      }
    }
  }),
  mounted() {
    const ctx = document.querySelector('.Graph05 .container canvas');
    const canvas = ctx.getContext("2d")
    let gradient = canvas.createLinearGradient(0, 0, window.innerWidth, 0)
    gradient.addColorStop(0, "#3F3D56")
    gradient.addColorStop(1, "#4481EB")

    this.planetChartData.data.datasets[0].backgroundColor = gradient

    this.planetChartData.options.plugins.tooltip.external = function(context) {
        // Tooltip Element
        var tooltipEl = document.getElementById('chartjs-tooltip');

        // Create element on first render
        if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.classList.add('customTool')
            tooltipEl.innerHTML = '<span></span>';
            document.body.appendChild(tooltipEl);
        }

        tooltipEl.style.opacity = 1

        var tooltipModel = context.tooltip;
        if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
        }

        function getBody(bodyItem) {
            return bodyItem.lines;
        }

        // Set Text
        if (tooltipModel.body) {
            var bodyLines = tooltipModel.body.map(getBody);

            var innerHtml = '';

            bodyLines.forEach(function(body) {
                innerHtml += body;
            });

            var spanRoot = tooltipEl.querySelector('span');
            spanRoot.innerHTML = innerHtml;
        }

        var position = context.chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX;
        tooltipEl.style.left = ctx.offsetWidth * 0.38 - tooltipEl.style.left + 'px'
        console.log(tooltipEl.style.left);
        tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 12.5 + 'px';
        tooltipEl.style.padding = tooltipModel.padding + 'px ' + tooltipModel.padding + 'px';
        tooltipEl.style.pointerEvents = 'none';
    }

    new Chart(ctx, this.planetChartData);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Graph05 {
  width: 100%;
  height: fit-content;
  padding: 75px 0 8rem 0;
}

.Graph05 .text {
  max-width: 550px;
  margin: 0 auto;
}

.Graph05 .container {
  width: 90%;
  padding-left: 5%;
  margin-top: 40px;
}

.Graph05 .container canvas {
  width: 100% !important;
}

.goTo {
  width: fit-content;
  background: linear-gradient(180deg, #00B0FF 0%, #4382EC 100%);
  padding: 18px 80px;
  border-radius: 100px;
  margin: 66px auto 0 auto;
}
</style>
