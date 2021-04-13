<template>
  <div class="Graph04 dark">
    <h2 class="subtitle" >Les cercles de l’aérospatiale</h2>
    <div class="text">
      <p>
        "<span class="blue">Beaucoup de technologies</span> devront faire partie des fusées du futur : l’IA, la connectivité... Il faut de la diversité dans les équipes pour maîtriser la conception, la production et l’entretien. Les femmes contribuent à cette diversité en créant de l’émulation dans les équipes"
      </p>
      <div class="auteur" style="text-align:right">
        <b>Valérie Gobertière</b><br/>
        <i>Responsable Chantiers  Industriels Air France</i>
      </div>
    </div>
    <div class="circle circle-small">
      <div class="text">23</div>
      <svg>
          <circle class="bg" cx="115" cy="115" r="110"></circle>
          <circle class="progress" cx="115" cy="115" r="110" stroke-dashoffset="544">
              <!-- -1 * (700 * n - 700 - 5) | n -> % entre 0 et 1 -->
          </circle>
      </svg>
    </div>
    <div class="space"></div>
    <div class="circle circle-small">
      <div class="text">16</div>
        <svg>
            <circle class="bg" cx="115" cy="115" r="110"></circle>
            <circle class="progress" cx="115" cy="115" r="110" stroke-dashoffset="593">
                <!-- -1 * (700 * n - 700 - 5) | n -> % entre 0 et 1 -->
            </circle>
        </svg>
    </div>
    <div class="space"></div>
    <div class="circle circle-small">
      <div class="text">62</div>
      <svg>
          <circle class="bg" cx="115" cy="115" r="110"></circle>
          <circle class="progress" cx="115" cy="115" r="110" stroke-dashoffset="271">
              <!-- -1 * (700 * n - 700 - 5) | n -> % entre 0 et 1 -->
          </circle>
      </svg>
    </div>
    <div class="space"></div>
    <div class="circle circle-small">
      <div class="text">16</div>
      <svg>
          <circle class="bg" cx="115" cy="115" r="110"></circle>
          <circle class="progress" cx="115" cy="115" r="110" stroke-dashoffset="593">
              <!-- -1 * (700 * n - 700 - 5) | n -> % entre 0 et 1 -->
          </circle>
      </svg>
    </div>
    <h2>Total</h2>
    <div class="circle circle-big">
      <div class="text">23</div>
      <svg>
          <circle class="bg" cx="175" cy="175" r="160"></circle>
          <circle class="progress" cx="175" cy="175" r="160">
              <!-- -1 * (1005 * n - 1005 - 2.5) | n -> % entre 0 et 1 -->
          </circle>
      </svg>
    </div>
    <p>
      Hausse de 18 à 23 % en 10 ans. 3 000 femmes recrutées en 2018. Soit 25% des effectifs.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Graph04',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Graph04 {
  width: 100%;
  height: fit-content;
  padding: 75px 0 0 0;
  background-color: var(--secondary-dark);
}

.Graph04 > .text {
  position: relative;
  max-width: 910px;
  margin: 0 auto 48px auto;
  padding: 0 8px;
}

.Graph04 > .text p { position: relative }

.Graph04 > .text::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -15%;
  background-image: url(../assets/images/quote.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 264px;
  height: 174px;
}

.space {
  background-image: url('../assets/images/space.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  width: 6px;
  height: 48px;
  margin: 0 auto;
}

.circle {
  position: relative;
  margin: 30px auto 25px auto;
}

.circle .bg {
  fill: none;
  stroke: #00B0FF70;
}

.circle .progress {
  fill: none;
  stroke: #00B0FF;
  stroke-linecap: round;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

.circle .text {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 60px;
  text-align: center;
  font-weight: 400;
}

.circle-small, .circle-small svg { width: 230px; height: 230px; }
.circle-small .bg { stroke-width: 5px }
.circle-small .progress {
  stroke-width: 10px;
  stroke-dasharray: 700;
}

.circle-big, .circle-big svg { width: 350px; height: 350px; }
.circle-big .bg { stroke-width: 10px }
.circle-big .text { font-size: 90px }

.circle-big .progress {
  stroke-width: 20px;
  stroke-dasharray: 1005;
  stroke-dashoffset: 776.35;
  -webkit-animation: big 1.5s ease-in-out;
          animation: big 1.5s ease-in-out;
}

@keyframes big {
  from {
    stroke-dashoffset: 1005;
  }
  to {
    stroke-dashoffset: 776.35;
  }
}
</style>
