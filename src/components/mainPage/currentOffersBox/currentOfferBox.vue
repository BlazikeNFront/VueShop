<template>
  <div v-if="!showAdd" @click="toggleAddBox" class="currentOfferToggler">
    <p>Brand of the month</p>
  </div>
  <div v-if="showAdd" class="currentOfferContainer">
    <button class="closeOfferButton" @click="toggleAddBox"></button>
    <img src="../../../assets/offerboxBackground.jpg" alt="brand logo" />

    <p>New products from savegear !! <span>Click to check it out!</span></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showAdd: false,
    };
  },
  methods: {
    toggleAddBox() {
      this.showAdd = !this.showAdd;
    },
  },
};
</script>
<style lang='scss'>
.currentOfferToggler {
  position: fixed;
  transform: translate(-50%, -50%);
  width: 3.5rem;
  background-color: #d47304;
  color: black;
  z-index: 2000;
  border-radius: 10px 0 0 10px;

  p {
    height: 100%;
    display: flex;
    width: 20%;
    height: 100%;
    padding: 0.5rem;
  }
}

.closeOfferButton {
  position: absolute;
  right: 7%;
  top: 4%;
  padding: 1.5rem;
  background-image: url(/img/closeButton.9dc48ebb.svg);
  background-size: cover;
  background-color: transparent;
  border: none;
  &:focus {
    outline: rgb(212, 115, 4);
    outline-width: 0.3rem;
  }
}
.currentOfferContainer {
  @include centerAbsolute;
  padding: 1rem;
  position: fixed;
  width: 60%;
  height: fit-content;
  border-radius: 15px;
  background-color: black;
  overflow: hidden;
  z-index: 1300;
  img {
    width: 90%;
  }
  p {
    font-size: $font-bg;
    color: white;
    span {
      color: rgb(212, 115, 4);
    }
  }
}
</style>