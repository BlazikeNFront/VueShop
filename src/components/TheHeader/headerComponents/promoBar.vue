<template>
  <div class="promoBar">
    <div>
      <font-awesome-icon
        :icon="['fa', 'truck']"
        class="promoBar__icon"
      ></font-awesome-icon>
      <p>Next Day Delivery From $2.99</p>
    </div>
    <div>
      <font-awesome-icon
        :icon="['fa', 'star']"
        class="promoBar__icon"
      ></font-awesome-icon>
      <font-awesome-icon
        :icon="['fa', 'star']"
        class="promoBar__icon"
      ></font-awesome-icon>
      <font-awesome-icon
        :icon="['fa', 'star']"
        class="promoBar__icon"
      ></font-awesome-icon>
      <font-awesome-icon
        :icon="['fa', 'star']"
        class="promoBar__icon"
      ></font-awesome-icon>
      <font-awesome-icon
        :icon="['fa', 'star']"
        class="promoBar__icon"
      ></font-awesome-icon>
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
    width: 15rem;
    @include flexLayout;
    justify-content: space-around;
    &:nth-child(3) {
      width: 12rem;
    }
  }
}
.promoBar__icon {
  font-size: 1.1rem;
  color: #03a49b;
  &:nth-child(2) {
    font-size: 1rem;
  }
}
</style>
