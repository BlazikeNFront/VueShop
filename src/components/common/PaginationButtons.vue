<template>
  <div>
    <div class="pagination__buttons">
      <button v-for="index in numberOfPages" :key="index" @click="pageChange">
        {{ index }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["numberOfPages"],
  emits: ["pageChange"],
  methods: {
    pageChange(e) {
      this.$emit("pageChange", e.toElement.innerText);
    },
  },
};
</script>
<style lang="scss">
.pagination__buttons {
  width: 50%;
  margin: 4rem auto;
  button {
    @include button;
    color: white;
    padding: 1rem;
    margin: 0.5rem;
  }
  button:hover {
    color: $primiary-color;
    background-color: white;
  }
}
</style>