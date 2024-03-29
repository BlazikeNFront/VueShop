<template>
  <div>
    <modal-dialog @closeDialog="this.$emit('hideUserConfirmationDialog')">
      <div class="confirmationBox">
        <div
          class="confirmationBox__pickAddressBox"
          v-if="!this.lastUsedAddress"
        >
          <h3>There is no delivery address</h3>
          <p>
            Click
            <button
              class="confirmationBox__pickAddressButton"
              @click="this.showAddressForm = true"
            >
              Here
            </button>
            to pick delivery address
          </p>
        </div>
        <div v-else>
          <div class="confirmationBox__infoBox">
            <span>Name:</span>
            <p>{{ lastUsedAddress.name }}</p>
          </div>
          <div class="confirmationBox__infoBox">
            <span>Surname:</span>
            <p>{{ lastUsedAddress.surname }}</p>
          </div>
          <div class="confirmationBox__infoBox">
            <span>Address:</span>
            <p>{{ lastUsedAddress.address }}</p>
          </div>
        </div>

        <transition name="addNewAddress" mode="out-in">
          <add-address-form
            v-if="this.showAddressForm"
            @exitButton="this.showAddressForm = false"
          ></add-address-form>
        </transition>

        <div class="confirmationBox__addAdressBox__addressButtons">
          <button @click="this.showAddressForm = !this.showAddressForm">
            Add new address
          </button>
          <button @click="this.handleOrderRequest">Confirm Order</button>
        </div>
      </div>
      <transition name="orderResult" mode="out-in">
        <div
          class="confirmationBox__orderResultBox"
          :class="{
            orderResultBox__prodList: orderResult.productsUnavaliable,
          }"
          v-if="this.orderResult.visible"
        >
          <h4>Order Request Result</h4>
          <loader
            class="orderResultBox__loader"
            v-if="!this.orderResult.message"
          ></loader>
          <div class="orderResultBox__resultDisplay" v-else>
            <div class="orderResultBox__mainMessage">
              <span
                :style="
                  this.orderResult.result === true
                    ? 'color:#3eaf7c'
                    : 'color:red'
                "
                ><font-awesome-icon
                  v-if="this.orderResult.result === true"
                  :icon="['fa', 'check']"
                ></font-awesome-icon>
                <font-awesome-icon
                  v-if="this.orderResult.result !== true"
                  :icon="['fas', 'times']"
                ></font-awesome-icon
              ></span>
              <p>
                {{ this.orderResult.message }}
              </p>
            </div>
            <div
              class="orderResultBox__productsUnavalible"
              v-if="this.orderResult.productsUnavaliable"
            >
              <h5>Products unavaliable:</h5>
              <ul>
                <li
                  v-for="product in this.orderResult.productsUnavaliable"
                  :key="product._id"
                >
                  <p>•{{ product.name }}</p>
                </li>
              </ul>
            </div>
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
import CreateHeaders from "../mixins/createHeaders.js";
export default {
  components: {
    AddAddressForm,
  },
  emits: ["hideUserConfirmationDialog"],
  mixins: [CreateHeaders],
  data() {
    return {
      showAddressForm: false,

      orderResult: {
        visible: false,
        result: null,
        message: "Shop couldnt accept order, try again later",
        productsUnavaliable: null,
      },
    };
  },
  computed: {
    lastUsedAddress() {
      return this.$store.getters["UserAuth/getLastUsedAddress"];
    },
  },

  methods: {
    async handleOrderRequest() {
      try {
        this.orderResult.visible = true;
        this.orderResult.loader = true;
        const token = this.$store.getters["UserAuth/getToken"];
        const requestHeaders = this.createHeaders(token);
        const payload = {
          cart: this.$store.getters["Cart/getCart"],
          userAddress: {
            name: this.lastUsedAddress.name,
            surname: this.lastUsedAddress.surname,
            address: this.lastUsedAddress.address,
          },
        };

        const rawData = await fetch("http://localhost:8080/confirmOrder", {
          method: "POST",
          headers: requestHeaders,
          body: await JSON.stringify(payload),
          credentials: "include",
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
        this.orderResult.loader = false;
      }
    },
    confirmAction() {
      if (this.orderResult.result === true) {
        this.$router.push({ name: "user-orders", query: { page: "1" } });
      } else {
        this.orderResult.visible = false;
      }
    },
  },
};
</script>
<style lang="scss">
.confirmationBox {
  @include flexLayout;
  position: relative;
  width: 35rem;
  height: 45rem;
  flex-direction: column;
  justify-content: space-evenly;

  span {
    width: 30%;
    font-size: 1.5rem;
    font-weight: 600;
  }

  label {
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
  }
  p {
    font-size: 1.5rem;
  }
}

.confirmationBox__orderResultBox {
  @include basicCart;
  @include flexLayout;
  position: absolute;
  margin: 10rem auto;
  padding: 2rem;
  width: 28rem;
  height: 28rem;
  flex-direction: column;

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
    margin: 1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: white;
    justify-content: center;

    font-size: 4rem;
  }
}
.orderResultBox__confirmButton {
  @include button;
  padding: 0.5rem 1rem;
  font-weight: 600;
}
.orderResultBox__resultDisplay {
  @include flexLayout;
  width: 100%;
  flex-direction: column;
}
.orderResultBox__prodList {
  height: 35rem;
}
.orderResultBox__mainMessage {
  @include flexLayout;
}
.orderResultBox__productsUnavalible {
  @include flexLayout;
  flex-direction: column;
  ul {
    @include flexLayout;
    flex-direction: column;
  }
  p {
    width: 100%;
    max-width: 100%;
  }
}
.confirmationBox__pickAddressBox {
  h3 {
    margin: 1.5rem;
    font-size: 2rem;
    text-align: center;
  }
  p {
    width: 100%;
    font-weight: 600;
    text-align: center;
  }
  button {
    @include button;
  }
}

.confirmationBox__changeAddressButton {
  position: absolute;
  top: 0;
  right: 10rem;
}
.confirmationBox__infoBox {
  @include flexLayout;
  margin: 1.5rem;
  width: 90%;
  min-width: 20rem;
  text-align: right;
  span {
    width: 35%;
  }
  p {
    width: 60%;
    text-align: left;
    font-size: 2rem;
  }
}
.confirmationBox__addAdressBox__addressButtons {
  @include flexLayout;

  button {
    @include button;
    margin: 1rem;
    padding: 0.5rem;
  }
}

.addNewAddress-enter-active,
.orderResult-enter-active {
  transition: all 0.5s ease-out;
}
.addNewAddress-leave-active,
.orderResult-leave-active {
  transition: all 0.5s ease-in;
}
.addNewAddress-enter-from,
.addNewAddress-leave-to {
  transform: translate(30rem);
  opacity: 0;
  @media (min-width: 768px) {
    transform: translate(40rem);
  }
}
.addNewAddress-enter-to,
.addNewAddress-leave-from {
  transform: translate(0rem);
  opacity: 1;
  @media (min-width: 768px) {
    transform: translate(-50%);
  }
}

.orderResult-enter-from,
.orderResult-leave-to {
  transform: translate(30rem);
  opacity: 0;
  @media (min-width: 768px) {
    transform: translate(40rem);
  }
}
.orderResult-enter-to,
.orderResult-leave-from {
  transform: translate(0rem);
  opacity: 1;
}

@media (min-width: 768px) {
  .confirmationBox {
    width: 60rem;
    height: 50rem;
  }
  .confirmationBox__addAdressBox__addressButtons {
    button {
      padding: 1rem;
      font-weight: 600;
    }
  }
}
</style>

