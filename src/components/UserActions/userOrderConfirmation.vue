<template>
  <error-modal>
    <div class="confirmationBox">
      <div>
        <div class="confirmationBox__infoBox">
          <span>Name:</span>
          <p>{{ userAdress.name }}</p>
        </div>
        <div class="confirmationBox__infoBox">
          <span>Surname:</span>
          <p>{{ userAdress.surname }}</p>
        </div>
        <div class="confirmationBox__infoBox">
          <span>Address:</span>
          <p>{{ userAdress.address }}</p>
        </div>
      </div>
      <form
        class="confirmationBox__form"
        @submit.prevent="addNewAddress"
        v-if="showAddressForm"
      >
        <div class="confirmationForm__formControl">
          <label for="Name">Name: </label
          ><input
            id="Name"
            name="name"
            type="text"
            placeholder="Name"
            v-model="newAddressForm.name"
          />
        </div>
        <div class="confirmationForm__formControl">
          <label for="Surname">Surname: </label
          ><input
            id="Surname"
            name="Surname"
            type="text"
            placeholder="Surname"
            v-model="newAddressForm.surname"
          />
        </div>
        <div class="confirmationForm__formControl">
          <label for="Addres">Address: </label
          ><input
            id="Name"
            name="name"
            type="text"
            placeholder="Name"
            v-model="newAddressForm.address"
          />
        </div>
        <button class="confirmationForm__button">Confirm address</button>
      </form>
      <button
        class="confirmationBox__newAddressButton"
        @click="this.showAddressForm = !this.showAddressForm"
      >
        Add new address
      </button>
      <button>Confirm Order</button>
    </div>
  </error-modal>
</template>
<script>
export default {
  data() {
    return {
      userAdress: {
        name: "Damian",
        surname: "Blaziken",
        address: "dsad jaksdj aksd jasij d",
      },
      showAddressForm: false,
      newAddressForm: {
        name: null,
        surname: null,
        address: null,
      },
    };
  },
  methods: {
    async addNewAddress() {
      try {
        const data = 0;
        data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang="scss">
.confirmationBox {
  @include flexLayout;
  position: relative;
  flex-direction: column;
  width: 70%;
  span {
    width: 30%;
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    width: 65%;
    text-align: left;
    font-size: 1.5rem;
  }
  label {
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  button {
    margin-top: 3rem;
    @include button;
    padding: 1rem 1rem;
    font-weight: 600;
  }
}
.confirmationBox__form {
  @include basicCart;
  margin: 2rem;
  padding: 1.5rem;
}

.confirmationBox__infoBox {
  @include flexLayout;
  margin: 2rem;
}
.confirmationForm__formControl {
  @include flexLayout;
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 10px;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.2);
  input {
    border: none;

    text-align: center;
    height: 90%;
    font-family: inherit;
    font-weight: 600;
    background: transparent;
    border-bottom: 1px solid #2c3e50;
    &:focus {
      outline: none;
    }
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border: none;

    -webkit-text-fill-color: #2c3e50;
    -webkit-box-shadow: 0 0 0 30px #f5e3e6 inset;
    box-shadow: 0 0 0 30px #f5e3e6 inset;
  }
}
.confirmationForm__button {
  @include centerWithTranslate;
}
.confirmationBox__newAddressButton {
  position: absolute;
  right: 5%;
}
</style>

