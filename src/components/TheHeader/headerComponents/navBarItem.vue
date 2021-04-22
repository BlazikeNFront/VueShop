<template>
  <li
    class="mainNavList__item"
    :class="{ letterSpacing: isShortTitle }"
    @click="searchAction(this.title)"
  >
    {{ this.title }}
    <ul class="mainNavList__subList">
      <li>{{ this.title }}</li>
      <!-- i want to same color gradient continues in sublist item, so to achive that  sublist works like popUp replaceing original nav -->
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
  computed: {
    isShortTitle() {
      if (this.title.length < 9) {
        return true;
      } else {
        return false;
      }
    },
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
  @include bluesGradient;
  width: 9rem;
  position: relative;
  z-index: 10000;
  margin: 0 0.5rem;
  padding: 1rem 0;
  border-radius: 10px 10px 0 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  cursor: pointer;

  li {
    font-size: 1.2rem;
    width: 100%;
    padding: 1rem;
  }
  li:nth-child(1) {
    font-size: 1.1rem;
    font-weight: 600;
  }
}
.mainNavList__subList {
  @include flexLayout;
  @include centerWithTranslate;
  @include bluesGradient;
  display: none;
  margin-left: 50%;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 9rem;
  height: 18rem;
  flex-direction: column;
  font-size: 1.5rem;
  color: white;
  border-radius: 0 0 5px 5px;
  transition: all 0.5s ease;

  border-radius: 10px;
  li {
    position: relative;
    border-radius: 10px;
  }
  li::after {
    content: "";
    display: block;
    bottom: 1px;
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    width: 70%;
    height: 0.1rem;
    background-color: white;
  }
}
.mainNavList__item:hover {
  .mainNavList__subList {
    display: block;
  }
  li {
    &:hover {
      font-weight: 700;
      background-color: rgba(0, 0, 0, 0.2);
      &::after {
        background-color: #bdbb40;
      }
    }
  }
}
.letterSpacing {
  letter-spacing: 2px;
}
</style>