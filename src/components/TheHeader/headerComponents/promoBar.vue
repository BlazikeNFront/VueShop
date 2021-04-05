<template>
  <div class="promoBar">
    <div>
      <font-awesome-icon :icon="['fa', 'truck']"></font-awesome-icon>
      <p>Next Day Delivery From $2.99</p>
    </div>
    <div>
      <font-awesome-icon :icon="['fa', 'star']"></font-awesome-icon>
      <font-awesome-icon :icon="['fa', 'star']"></font-awesome-icon>
      <font-awesome-icon :icon="['fa', 'star']"></font-awesome-icon>
      <font-awesome-icon :icon="['fa', 'star']"></font-awesome-icon>
      <font-awesome-icon :icon="['fa', 'star']"></font-awesome-icon>
      <p>More than 30000 Star Service Reviews</p>
    </div>
    <div>
      <font-awesome-icon
        :icon="['fa', 'coins']"
        class="promoBar__icon"
      ></font-awesome-icon>
      <p>Best Choice And Prices</p>
    </div>
  </div>
</template>
<style lang="scss">
.promoBar {
  @include flexLayout;
  width: 100%;
  padding: 0 15% 0 15%;

  div {
    width: 18rem;
    height: 100%;
    @include flexLayout;

    justify-content: space-around;

    p {
      font-weight: 500;
    }
    svg {
      font-size: 1.5rem;
      color: #4aa6c6;
    }
    &:nth-child(2) {
      width: 20rem;
    }
    &:nth-child(3) {
      width: 15rem;
      svg {
        font-size: 2rem; //coins icon looks unproportional smalller than others icon
      }
    }
  }
}
.promoBar__icon {
  font-size: 1.2rem;
  color: #03a49b;
}
</style>
