<template>
  <li class="mainNavList__item">
    {{ this.title }}
    <ul class="subContent">
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
  padding: 0.7rem 0;
  cursor: pointer;

  li {
    font-size: $font-md;
    padding: 1rem;
    &:hover {
      font-weight: 700;
    }
  }
}
.mainNavList__item:hover {
  color: black;
  & .subContent {
    display: block;
    animation: fadeInAnim 0.8s ease;
  }
}

.subContent {
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

@include fadeInAnim;
</style>