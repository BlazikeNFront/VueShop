<template>
  <div class="brandAdd">
    <week-offer-box></week-offer-box>
  </div>
  <div class="container">
    <header-component></header-component>
    <nav-bar></nav-bar>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import WeekOfferBox from "./components/mainPage/currentOffersBox/currentOfferBox.vue";

import NavBar from "./components/navBar/navBar.vue";
import HeaderComponent from "./components/header/header.vue";
import FooterComponent from "./components/footer/footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    HeaderComponent,
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
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0 30px black inset;
  -webkit-box-shadow: 0 0 0 30px black inset;
}
input:-webkit-autofill {
  -webkit-text-fill-color: white;
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

ol,
ul {
  list-style: none;
}
button {
  cursor: pointer;
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
}

.container {
  @include containerPosition;
  position: relative;
  background-color: black;
  /*  overflow: hidden; */
}
ul {
  list-style: none;
}
input {
  font-family: inherit;
}
.main {
  height: 100rem;
}
</style>
