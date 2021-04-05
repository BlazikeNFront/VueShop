<template>
  <div class="brandAdd">
    <week-offer-box></week-offer-box>
  </div>
  <div class="container">
    <the-header></the-header>
    <nav-bar></nav-bar>
    <main class="main">
      <router-view v-slot="{ Component, route }">
        <!-- Use any custom transition and fallback to `fade` -->
        <transition :name="route.meta.transition || 'fade'">
          <component :is="Component" />
        </transition>
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
/* Change Autocomplete styles in Chrome*/
/* input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 30px black inset;
  -webkit-box-shadow: 0 0 0 30px black inset;
} */

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
}

.container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.main {
  height: 140rem;

  margin-top: 5rem;
  position: relative;
  overflow: hidden;
}
</style>
