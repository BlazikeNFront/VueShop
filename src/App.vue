<template>
  <div class="brandAdd">
    <week-offer-box></week-offer-box>
  </div>
  <div class="container">
    <the-header></the-header>

    <main id="main">
      <router-view v-slot="{ Component, route }">
        <transition mode="out-in" :name="route.meta.transition || 'pageChange'">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer-component></footer-component>
  </div>
</template>

<script>
import WeekOfferBox from "./components/mainPage/currentOffersBox/currentOfferBox.vue";

import TheHeader from "./components/TheHeader/TheHeader.vue";
import FooterComponent from "./components/footer/footer.vue";

export default {
  name: "App",
  components: {
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
  /* background-image: linear-gradient(315deg, #d9e4f5 0%, #f5e3e6 74%); */
}

.container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

#main {
  margin: 0rem auto;
  padding: 2rem 2rem; // avoid margin stacking
  height: 100%;
  width: 100%;
  max-width: 125rem;
}
.pageChange-enter-active,
.pageChange-leave-active {
  transition: all 0.5s;
}

.pageChange-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.pageChange-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.pageChange-enter-to,
.pageChange-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
.rawRedirect-enter-active,
.rawRedirect-leave-active {
  opacity: 1;
}
</style>
