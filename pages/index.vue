<template>
  <div class="ServicePage">
    <h1>TRANSITHUB</h1>
    <span><i>Driving agribusiness every day</i></span>
    <span class="ServisMessage">
      На сайті йдуть планові технічні роботи.
      <p>Просимо вибачення за незручності!</p>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.ServicePage {
  position: fixed;
  z-index: 100000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(90, 89, 83, 0.9);
}

h1 {
  margin: 0;
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 36px;
  color: #fecd34;
  font-weight: 300;
}

span {
  margin-top: 40px;
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Lobster", cursive;
  font-size: 13px;
  letter-spacing: 1px;
  color: white;
  text-align: center;
}

.ServisMessage {
  margin: 5px 0;
  height: 30px;
  position: absolute;
  top: 50%;
  font-family: Arial;
  font-size: 30px;
  letter-spacing: 1px;
  color: rgb(240, 230, 230);
  text-align: center;
}

.ServisMessage p {
  font-size: 20px;
  margin-top: 20px;
}
</style>
