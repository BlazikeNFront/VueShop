<template>
  <li class="mainNavList__item" @click="searchAction(this.title)">
    {{ this.title }}
    <ul class="mainNavList__subList">
      <li>{{ this.title }}</li>
      <!-- i want to have same gradient continues in sublist item so sublist works like popUp replaceing oringal nav -->
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
  width: 22rem;
  position: relative;
  z-index: 10000;
  margin: 0 0.5rem;
  padding: 1rem 0;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #ffac81;

  background-image: linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
  border-radius: 10px 10px 0 0;

  li {
    font-size: 1.2rem;
    width: 100%;
    padding: 1rem;
  }
  li:nth-child(1) {
    font-size: 1.5rem;
    font-weight: 600;
  }
  li:nth-child(4) {
    border-radius: 0 0 10px 10px;
  }
}
.mainNavList__subList {
  @include flexLayout;
  @include centerWithTranslate;
  display: none;
  margin-left: 50%;
  font-size: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 22rem;
  height: 18.5rem;
  flex-direction: column;
  font-size: 1.5rem;
  color: black;
  border-radius: 0 0 5px 5px;
  transition: all 0.5s ease;
  background-color: #ffac81;
  background-image: linear-gradient(315deg, #ffac81 0%, #ff928b 74%);
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
  font-weight: 700;

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
</style>