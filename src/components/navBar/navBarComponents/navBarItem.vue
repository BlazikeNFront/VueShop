<template>
  <li class="mainNavList__item" @click="searchAction(this.title)">
    {{ this.title }}
    <ul>
      <li
        v-for="element in this.listElements"
        :key="element"
        @click.stop="searchAction(this.title, element)"
      >
        {{ element }}
      </li>
    </ul>
  </li>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {
      listElements: ["Rods", "Reels", "Lines", "Other"],
    };
  },
  methods: {
    searchAction(title, element) {
      const category = title.split(" ")[0];

      let query;
      if (element) {
        query = category + " " + element;
      } else {
        query = category;
      }

      const payload = {
        query: query,
        page: 1,
      };

      this.$store.dispatch("UserSearch/handleSearchRequest", payload);
      this.$router.push({
        name: "search-for-product",
        params: { searchQuery: payload.query },
        query: { page: 1 },
      });
    },
  },
};
</script>
<style lang='scss'>
.mainNavList__item {
  width: 100%;
  position: relative;
  padding: 1rem 0;
  cursor: pointer;
  ul {
    position: absolute;
    top: 3.8rem;
    width: 100%;
    @include flexLayout;
    @include centerWithTranslate;
    display: none;
    flex-direction: column;
    font-size: $font-md;
    color: black;
    background-color: white;
    border-radius: 0 0 5px 5px;
    transition: all 0.5s ease;
  }
  li {
    font-size: 1.2rem;
    padding: 1rem;
    background-color: #fcfbf8;
  }
}
.mainNavList__item:hover {
  background-color: #fcfbf8;
  font-weight: 700;
  & ul {
    display: block;
    animation: fadeInAnim 0.5s ease;
  }
  li {
    &:hover {
      font-weight: 700;
    }
  }
}

@include fadeInAnim;
</style>