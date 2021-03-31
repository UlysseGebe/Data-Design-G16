<template>
  <div class="Presentation dark">
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
  height: 100vh;
  min-height: 400px;
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
}

.left p {
  max-width: 410px;
}

.right {
  width: 40%;
  height: 100%;
  background-image: url('../assets/images/rocket_moon.svg');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: cover;
}

.arrowNext {
  position: absolute;
  bottom: 75px;
  left: 0;
  right: 0;
  text-align: center;
}

</style>
