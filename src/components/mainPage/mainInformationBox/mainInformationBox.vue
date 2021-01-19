<template>
  <section class="containerForMainImg">
    <img src="../../../assets/mainInfoImage.jpg" alt="picture of angler" />
    <div class="containerForMainImg__text">
      <h3>GEAR UP FOR THE NEW YEAR</h3>
      <p>Discounts up to 40%</p>
      <p>
        Special offer from SavegeGear <br />
        <a> Click here </a>to check it out!!
      </p>
    </div>
  </section>
</template>
<style lang='scss'>
.containerForMainImg {
  position: relative;
  max-height: 50rem;
  img {
    width: 100%;
    opacity: 0.3;
    max-height: inherit;
  }

  .containerForMainImg__text {
    @include flexLayout;
    @include centerAbsolute;

    flex-direction: column;
    z-index: 4;
    color: white;
    width: 70%;

    font-size: $font-bg;
    p {
      margin: 1rem;
    }
  }
}
</style>