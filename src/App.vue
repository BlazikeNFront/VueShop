<template>
  <div class="container">
    <header-component></header-component>
    <nav-bar></nav-bar>
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from "./components/mainPage/mainPage.vue";
import NavBar from "./components/navBar/navBar.vue";
import HeaderComponent from "./components/header/header.vue";

export default {
  name: "App",
  components: {
    MainPage,
    NavBar,
    HeaderComponent,
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
  background-color: black;
}
ul {
  list-style: none;
}
input {
  font-family: inherit;
}
</style>
