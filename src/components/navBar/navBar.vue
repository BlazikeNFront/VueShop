<template>
  <nav>
    <ul class="mainNavList">
      <nav-bar-item
        v-for="title in navBarItems"
        :title="title"
        :key="title"
      ></nav-bar-item>
    </ul>
  </nav>
</template>
<script>
import NavBarItem from "./navBarComponents/navBarItem.vue";

export default {
  components: {
    NavBarItem,
  },
  data() {
    return {
      navBarItems: ["Spinning", "Bait Fishing", "Fly Fishing", "Casting"],
    };
  },
};
</script>
<style lang='scss'>
nav {
  width: 100%;
  height: 4rem;
  position: relative;

  z-index: 100;
  ul {
    @include centerWithTranslate;
    @include flexLayout;

    justify-content: space-around;
    width: 80%;
    height: 100%;
    font-size: 1.5rem;
  }
}
</style>