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
      navBarItems: ["Reels", "Rods", "Lures", "Lines", "Others"],
    };
  },
};
</script>
<style lang='scss'>
nav {
  width: 100%;
  height: 3rem;
  background-color: $primiary-color;
}
.mainNavList {
  @include flexLayout;
  justify-content: space-around;
  font-size: 2rem;
  color: white;
  background-color: $primiary-color;
}
</style>