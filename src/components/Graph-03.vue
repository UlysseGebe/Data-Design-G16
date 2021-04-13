<template>
    <div class="Graph03">
        <h2 class="subtitle">Quelques chiffres depuis le début....</h2>
        <p class="text">Les Etats-Unis sont le premier et unique pays à avoir autant d’hommes que de femmes dans l’industrie aérospatiale durant ces dernières années. En Europe, seuls la France et la Suède tendent à se rapprocher d’une totale parité.</p>
        <div class="container">
          <div class="bar"><progress :value="this.dataGraph03['Canada'][0]" :max="this.dataGraph03['Canada'][1]">Canada</progress><span class="text">Canada</span></div>
          <div class="bar"><progress :value="this.dataGraph03['South Korea'][0]" :max="this.dataGraph03['South Korea'][1]">Corée du Sud</progress><span class="text">Corée du Sud</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Spain'][0]" :max="this.dataGraph03['Spain'][1]">Espagne</progress><span class="text">Espagne</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Iran'][0]" :max="this.dataGraph03['Iran'][1]">Iran</progress><span class="text">Iran</span></div>
          <div class="bar"><progress :value="this.dataGraph03['France'][0]" :max="this.dataGraph03['France'][1]">France</progress><span class="text">France</span></div>
          <div class="bar"><progress :value="this.dataGraph03['United States'][0]" :max="this.dataGraph03['United States'][1]">États-Unis</progress><span class="text">États-Unis</span></div>
          <div class="bar"><progress :value="this.dataGraph03['United Kingdom'][0]" :max="this.dataGraph03['United Kingdom'][1]">Royaume-Uni</progress><span class="text">Royaume-Uni</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Denmark'][0]" :max="this.dataGraph03['Denmark'][1]">Danemark</progress><span class="text">Danemark</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Soviet Union'][0]" :max="this.dataGraph03['Soviet Union'][1]">Union Soviétique</progress><span class="text">Union Soviétique</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Sweden'][0]" :max="this.dataGraph03['Sweden'][1]">Suède</progress><span class="text">Suède</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Cuba'][0]" :max="this.dataGraph03['Cuba'][1]">Cuba</progress><span class="text">Cuba</span></div>
          <div class="bar"><progress :value="this.dataGraph03['South Africa'][0]" :max="this.dataGraph03['South Africa'][1]">Afrique du Sud</progress><span class="text">Afrique du Sud</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Japan'][0]" :max="this.dataGraph03['Japan'][1]">Japon</progress><span class="text">Japon</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Italy'][0]" :max="this.dataGraph03['Italy'][1]">Italie</progress><span class="text">Italie</span></div>
          <div class="bar"><progress :value="this.dataGraph03['United Arab Emirates'][0]" :max="this.dataGraph03['United Arab Emirates'][1]">Emirats Arabes Unis</progress><span class="text">Emirats Arabes Unis</span></div>
          <div class="bar"><progress :value="this.dataGraph03['China'][0]" :max="this.dataGraph03['China'][1]">Chine</progress><span class="text">Chine</span></div>
          <div class="bar"><progress :value="this.dataGraph03['India'][0]" :max="this.dataGraph03['India'][1]">Inde</progress><span class="text">Inde</span></div>
          <div class="bar"><progress :value="this.dataGraph03['Russia'][0]" :max="this.dataGraph03['Russia'][1]">Russie</progress><span class="text">Russie</span></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Graph03',
  props: {
    dataGraph03: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Graph03 {
  width: 100%;
  height: fit-content;
  padding: 75px 0 40px 0;
}

.Graph03 > .text {
  max-width: 980px;
  margin: 0 auto;
  padding: 0 8px;
}

.container {
  position: relative;
  min-height: 900px;
  transform: rotate(-80deg)
}

.container .bar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 50%;
  padding-left: 75px;
}

.container .bar span {display: inline-block;}

.container .bar:first-child   {transform: rotate(0)}
.container .bar:nth-child(2)  {transform: rotate(20deg)}
.container .bar:nth-child(3)  {transform: rotate(40deg)}
.container .bar:nth-child(4)  {transform: rotate(60deg)}
.container .bar:nth-child(5)  {transform: rotate(80deg)}
.container .bar:nth-child(6)  {transform: rotate(100deg)}
.container .bar:nth-child(7)  {transform: rotate(120deg)}
.container .bar:nth-child(8)  {transform: rotate(140deg)}
.container .bar:nth-child(9)  {transform: rotate(160deg)}
.container .bar:nth-child(10) {transform: rotate(180deg)}
.container .bar:nth-child(11) {transform: rotate(200deg)}
.container .bar:nth-child(12) {transform: rotate(220deg)}
.container .bar:nth-child(13) {transform: rotate(240deg)}
.container .bar:nth-child(14) {transform: rotate(260deg)}
.container .bar:nth-child(15) {transform: rotate(280deg)}
.container .bar:nth-child(16) {transform: rotate(300deg)}
.container .bar:nth-child(17) {transform: rotate(320deg)}
.container .bar:last-child    {transform: rotate(340deg)}

.container .bar:nth-child(10) span,
.container .bar:nth-child(11) span,
.container .bar:nth-child(12) span,
.container .bar:nth-child(13) span,
.container .bar:nth-child(14) span,
.container .bar:nth-child(15) span,
.container .bar:nth-child(16) span,
.container .bar:nth-child(17) span,
.container .bar:last-child span{
  transform: rotate(180deg)
}

.container .bar:nth-child(10) progress:before,
.container .bar:nth-child(11) progress:before,
.container .bar:nth-child(12) progress:before,
.container .bar:nth-child(13) progress:before,
.container .bar:nth-child(14) progress:before,
.container .bar:nth-child(15) progress:before,
.container .bar:nth-child(16) progress:before,
.container .bar:nth-child(17) progress:before,
.container .bar:last-child progress:before,
.container .bar:nth-child(10) progress:after,
.container .bar:nth-child(11) progress:after,
.container .bar:nth-child(12) progress:after,
.container .bar:nth-child(13) progress:after,
.container .bar:nth-child(14) progress:after,
.container .bar:nth-child(15) progress:after,
.container .bar:nth-child(16) progress:after,
.container .bar:nth-child(17) progress:after,
.container .bar:last-child progress:after{
  transform: rotate(180deg)
}

progress {
  border-radius: 4px; 
  margin-right: 10px;
  position: relative;
  z-index: 1;
}

progress::-webkit-progress-bar {
  background-color: #0AB8FC;
  border-radius: 4px; 
}

progress::-webkit-progress-value {
  background-color: #3F3D56;
  border-radius: 4px; 
}

progress:hover:before {
  display: flex;
  position: absolute;
  content: attr(value);
  text-align: left;
  height: 100%;
  padding: 0 16px;
  top: 0;
  left: 0;
  align-items: center;
  color: white;
}
progress:hover:after {
  display: flex;
  position: absolute;
  content: attr(max);
  text-align: left;
  height: 100%;
  padding: 0 16px;
  top: 0;
  right: 0;
  align-items: center;
}
</style>
