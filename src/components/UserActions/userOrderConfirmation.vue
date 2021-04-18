<template>
  <div>
    <modal-dialog
      @closeDialog="this.$emit('hideAddressDialog')"
      @confirmError="this.$emit('hideAddressDialog')"
      width="90%"
      height="50%"
    >
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

        <transition name="fadeFromLeft" mode="out-in">
          <div
            class="confirmationBox__addAdressBox"
            v-if="this.showAddressForm"
          >
            <add-address-form
              class="confirmationBox__addAddressForm"
              @exitButton="this.showAddressForm = false"
            ></add-address-form>
          </div>
        </transition>

        <div class="confirmationBox__addAdressBox__addressButtons">
          <button @click="this.showAddressForm = !this.showAddressForm">
            Add new address
          </button>
          <button @click="this.handleOrderRequest">Confirm Order</button>
        </div>
      </div>
      <transition name="fadeFromLeft" mode="out-in">
        <div
          class="confirmationBox__orderResultBox"
          v-if="this.orderResult.visible"
        >
          <h4>Order Request Result</h4>
          <loader
            class="orderResultBox__loader"
            v-if="!this.orderResult.message"
          ></loader>
          <div class="orderResultBox__resultDisplay" v-else>
            <span
              :style="
                this.orderResult.result === true ? 'color:#3eaf7c' : 'color:red'
              "
              ><font-awesome-icon
                v-if="this.orderResult.result === true"
                :icon="['fa', 'check']"
              ></font-awesome-icon>
              <font-awesome-icon
                v-else
                :icon="['fas', 'times']"
              ></font-awesome-icon
            ></span>
            <p>
              {{ this.orderResult.message }}
            </p>
          </div>
          <button class="orderResultBox__confirmButton" @click="confirmAction">
            OK
          </button>
        </div>
      </transition>
    </modal-dialog>
  </div>
</template>
<script>
import AddAddressForm from "./addAdressForm.vue";
export default {
  components: {
    AddAddressForm,
  },

  data() {
    return {
      showAddressForm: false,
      userAdress: {
        name: "Damian",
        surname: "Blaziken",
        address: "dsad jaksdj aksd jasij d",
      },
      orderResult: {
        visible: false,
        result: null,
        message: "Shop couldnt accept order, try again later",
        productsUnavaliable: null,
      },
    };
  },
  methods: {
    async handleOrderRequest() {
      try {
        this.orderResult.visible = true;
        this.orderResult.loader = true;
        const token = this.$store.getters["UserAuth/getToken"];
        const payload = {
          cart: this.$store.getters["Cart/getCart"],
          token,
        };

        const rawData = await fetch("http://localhost:3000/confirmOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: await JSON.stringify(payload),
        });

        if (rawData.status === 406) {
          const data = await rawData.json();
          const productsUnavaliable = data.products;
          this.orderResult.result = false;
          this.orderResult.message =
            "One or more products are no longer avaliable";
          this.orderResult.productsUnavaliable = productsUnavaliable;
        } else if (rawData.status === 200) {
          this.orderResult.result = true;
          this.orderResult.message = "Order accepted";
          this.$store.dispatch("Cart/resetCart");
        } else {
          this.orderResult.result = false;
          this.orderResult.message =
            "Shop couldnt accept order, try again later";
        }
        this.orderResult.loader = false;
      } catch (err) {
        console.log(err);
      }
    },
    confirmAction() {
      if (this.orderResult.result === true) {
        this.$router.push({ name: "user-orders" });
      } else {
        this.$emit("hideAddressDialog");
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
    @include button;
    font-weight: 600;
  }
}

.confirmationBox__orderResultBox {
  @include basicCart;
  @include flexLayout;

  flex-direction: column;
  padding: 2rem;
  top: 20%;
  right: 7%;
  position: absolute;
  width: 28rem;
  height: 28rem;
  h4 {
    margin-top: 2rem;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }
  p {
    display: flex;
    max-width: 65%;
    align-items: center;
    justify-content: space-evenly;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }

  span {
    @include flexLayout;
    justify-content: center;
    margin: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: white;
    font-size: 4rem;
  }
}
.orderResultBox__confirmButton {
  @include button;
  font-weight: 600;
  padding: 0.5rem 1rem;
}
.orderResultBox__resultDisplay {
  @include flexLayout;
  width: 100%;
}

.confirmationBox__addAdressBox {
  position: absolute;
  right: -16%;
  top: -28%;
  opacity: 1;
}

.confirmationBox__infoBox {
  @include flexLayout;
  margin: 2rem;
}
.confirmationBox__addAdressBox__addressButtons {
  button {
    margin: 2rem;
  }
}

.fadeFromLeft-enter-active {
  transition: all 0.5s ease-out;
}
.fadeFromLeft-leave-active {
  transition: all 0.5s ease-in;
}
.fadeFromLeft-enter-from,
.fadeFromLeft-leave-to {
  transform: translate(75%);
  opacity: 0;
}
.fadeFromLeft-enter-to,
.fadeFromLeft-leave-from {
  transform: translate(0rem);
  opacity: 1;
}
</style>

