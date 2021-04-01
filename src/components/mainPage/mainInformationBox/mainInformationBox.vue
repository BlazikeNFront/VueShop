<template>
  <section class="containerForMainImg">
    <img
      src="../../../assets/mainInformationBackground.png"
      alt="fishing tackle picture"
    />

    <div class="containerForMainImg__InfoDisplay">
      <div class="containerForMainImg__text">
        <h3>NEW SAVA GEAR</h3>
        <img src="../../../assets/savagearLogo.png" alt="savagear logo" />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
        </p>
        <router-link :to="'/'">CLICK HERE TO CHECK IT OUT</router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {}, 1500);
  },
};
</script>
<style lang='scss'>
.containerForMainImg {
  position: relative;

  img {
    width: 100%;
    height: 100%;
    max-height: inherit;
    object-fit: cover;
  }
}

.containerForMainImg__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include flexLayout;
  flex-direction: column;
  justify-content: space-around;
  border: 4px solid $primary-color;
  width: 70%;
  height: 80%;
  border-radius: 20px;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  animation: 0.5s ease-in 1s 1 normal both running mainInformationBoxAppearence;

  h3 {
    font-family: $secondaryFont;
    font-weight: 800;
    color: $primary-color;
    font-size: 5rem;
  }
  img {
    width: 60%;
    height: 40%;
    max-width: 40rem;
    max-height: 12rem;
    object-fit: cover;
  }
  p {
    width: 70%;
    height: 30%;
    font-size: $font-md;
    color: white;
    font-family: $secondaryFont;
  }
  a {
    display: block;

    color: #d47304;
    font-size: 2rem;
    font-family: "Anton", sans-serif;
    text-decoration: none;
  }
}

@keyframes mainInformationBoxAppearence {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>