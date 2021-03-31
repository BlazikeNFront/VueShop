<template>
  <li class="mainNavList__item">
    {{ this.title }}
    <ul>
      <li>Shimano</li>
      <li>Daiwa</li>
      <li>Abu Garcia</li>
    </ul>
  </li>
</template>
<script>
export default {
  props: ["title"],
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