<template>
  <div class="container">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from "./components/mainPage/mainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style lang='scss'>
html {
  font-size: 62.5%;
}

body * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: black;
}

#app {
  font-family: $mainFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 95%;
  max-width: 1400px;
  position: relative;
  margin: 0 auto;
}
</style>
