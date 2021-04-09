<template>
  <div class="brandAdd">
    <week-offer-box></week-offer-box>
  </div>
  <div class="container">
    <the-header></the-header>
    <nav-bar></nav-bar>
    <main class="main">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import WeekOfferBox from "./components/mainPage/currentOffersBox/currentOfferBox.vue";

import NavBar from "./components/navBar/navBar.vue";
import TheHeader from "./components/TheHeader/TheHeader.vue";
import FooterComponent from "./components/footer/footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    TheHeader,
    WeekOfferBox,
    FooterComponent,
  },
};
</script>

<style lang='scss'>
html {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
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
  font-family: $mainFont;
}

h2 {
  font-size: 4rem;
  font-weight: 800;
}

ol,
ul {
  list-style: none;
}
button {
  cursor: pointer;
}

.brandAdd {
  position: fixed;
  z-index: 2222;
  top: 50%;
}

#app {
  font-family: $mainFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #d9e4f5;
  background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%);
}

.container {
  width: 100%;

  position: relative;
  overflow: hidden;
}

.main {
  margin: 2.5rem auto;
  padding: 2.5rem 0; // avoid margin stacking
  height: 100rem;
  height: 100%;
  width: 100%;
  max-width: 125rem;

  position: relative;
  overflow: hidden;
}
</style>
