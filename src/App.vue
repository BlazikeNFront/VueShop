<template>
  <div class="brandAdd">
    <week-offer-box></week-offer-box>
  </div>
  <div class="container">
    <header-component></header-component>
    <nav-bar></nav-bar>
    <main-page></main-page>
  </div>
</template>

<script>
import WeekOfferBox from "./components/mainPage/currentOffersBox/currentOfferBox.vue";
import MainPage from "./components/mainPage/mainPage.vue";
import NavBar from "./components/navBar/navBar.vue";
import HeaderComponent from "./components/header/header.vue";

export default {
  name: "App",
  components: {
    MainPage,
    NavBar,
    HeaderComponent,
    WeekOfferBox,
  },
};
</script>

<style lang='scss'>
html {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

.brandAdd {
  position: fixed;
  @include containerPosition;
  z-index: 2222;
  top: 50%;
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
  @include containerPosition;
  position: relative;

  background-color: black;
}
ul {
  list-style: none;
}
input {
  font-family: inherit;
}
</style>
