<template>
  <div class="Presentation dark" id="Presentation">
    <div class="left">
      <h1 class="title">Les femmes dans l’aérospatiale</h1>
      <p class="text">
        Depuis le début de l'exploration spatiale, il y a eu un total de 64 femmes et de 505 hommes qui ont participé à des missions spatiales.
      </p>
    </div>
    <div class="right"></div>
    <div class="arrowNext">
        <img src="@/assets/images/arrow-down.svg" alt="Arrow Down" class="button" @click="scrollTo('first-data')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Presentation',
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Presentation {
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  background: linear-gradient(to right, #4481EB 0%, #3F3D56 60%, #3F3D56 100%);
  display: flex;
  position: relative;
}

.left {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 130px;
  position: relative;
  z-index: 1;
}

.left p {
  max-width: 670px;
}

.right {
  width: 40%;
  height: auto;
  min-height: 100vh;
  background-image: url('../assets/images/rocket_moon.svg');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.right::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/rocket_stat.svg');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0;
  -webkit-animation: anim 5s ease-in-out;
          animation: anim 5s ease-in-out;
}

.arrowNext {
  position: absolute;
  bottom: 75px;
  left: 0;
  right: 0;
  text-align: center;
}

.arrowNext img {
  position: relative;
  z-index: 9999;
}

@keyframes anim {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@media (max-width: 1000px) {
  .left {
    padding-left: 100px;
  }
}

@media (max-width: 900px) {
  .left {
    padding-left: 75px;
  }
}

@media (max-width: 800px) {
  .left {
    padding-left: 50px;
  }
}



</style>
