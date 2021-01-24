<template>
  <div v-if="!showAdd" @click="toggleAddBox" class="currentOfferToggler">
    <p>Brand of the month</p>
  </div>
  <transition>
    <div v-if="showAdd" class="currentOfferContainer">
      <button class="closeOfferButton" @click="toggleAddBox"></button>

      <img src="../../../assets/offerboxBackground.jpg" alt="brand logo" />

      <p>New products from savegear !! <span>Click to check it out!</span></p>
    </div>
  </transition>
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
  position: absolute;
  top: -10rem;
  right: 0;
  width: 3.5rem;
  background-color: #d47304;
  color: black;
  border-radius: 10px 0 0 10px;

  p {
    padding: 0.5rem;
  }
}

.closeOfferButton {
  position: absolute;
  right: 7%;
  top: 4%;
  padding: 1.5rem;
  background-image: url("../../../assets/icons/closeButton.svg");
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
  width: 60%;
  background-color: black;
  padding: 1rem;
  border-radius: 15px;
  color: black;
  overflow: hidden;
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

.v-enter-from,
.v-leave-to {
  opacity: 0 !important;
  transform: translate(-25%, -50%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-to,
.v-leave-from {
  opacity: 1 !important;
  transform: translate(-50%, -50%);
}
</style>