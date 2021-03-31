<template>
  <div class="Graph02 dark">
    <h2 class="title" >Nombre de femmes dans la NASA</h2>
    <p class="text">Depuis le début de l'exploration spatiale, il y a eu un total de 64 femmes et de 505 hommes qui ont participé à des missions spatiales.</p>
  </div>
</template>

<script>
export default {
  name: 'Graph02',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Graph02 {
  width: 100%;
  height: calc(100vh - 169px - 104px);
  min-height: 600px;
  padding: 169px 0 104px 0;
  background-color: var(--secondary-dark);
  position: relative;
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

</style>
