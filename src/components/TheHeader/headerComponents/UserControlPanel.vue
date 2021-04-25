<template>
  <div class="userControlPanel">
    <button
      @click="this.handleUserButton"
      class="userControlPanel__showPanelButton"
    >
      <font-awesome-icon
        :class="{ loggedUserIcon: token }"
        :icon="['fa', 'user']"
      ></font-awesome-icon>
    </button>

    <back-drop v-if="this.showUserPanel" @click="hideUserPanel"></back-drop>
    <transition name="user-panel">
      <div class="userControlPanel__panel" v-if="this.showUserPanel">
        <a @click.prevent="this.redirectToUserCart">Check current cart</a>
        <a @click.prevent="this.redirectToUserOrder">Check orders</a>
        <button @click="logout">Logout</button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showUserPanel: false,
    };
  },
  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"];
    },
  },
  methods: {
    hideUserPanel() {
      this.showUserPanel = false;
    },
    handleUserButton() {
      if (this.token) {
        this.showUserPanel = !this.showUserPanel;
      } else {
        this.$router.push({ path: "/User/login" });
      }
    },

    logout() {
      this.$store.dispatch("UserAuth/logout");
      this.hideUserPanel();
      this.$router.push("/");
    },
    redirectToUserCart() {
      this.hideUserPanel();
      this.$router.push({ name: "user-cart" });
    },
    redirectToUserOrder() {
      this.hideUserPanel();
      this.$router.push({ name: "user-orders" });
    },
  },
};
</script>
<style lang="scss">
.userControlPanel {
  button {
    border: none;
    background: none;
    font-size: 2.5rem;
    color: $main-color;
  }
  a {
    cursor: pointer;
  }
}
.userControlPanel__panel {
  @include flexLayout;
  @include bluesGradient;
  position: absolute;
  top: -1rem;
  right: -6%;
  width: 19rem;
  height: 21rem;
  border: 2px solid white;
  border-radius: 15px 0 0 15px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  overflow: hidden;
  z-index: 2000;

  a {
    @include button;
    padding: 1rem;
    background-color: white;
    border-radius: 20px 0 0 20px;
    color: black;
    font-size: 1.5rem;
    font-weight: 600;
  }
  button {
    @include button;
    padding: 0.5rem 1rem;
    border-radius: 20px 0 0 20px;
    background-color: white;
    font-size: 1.5rem;
    font-weight: 600;
    color: black;
  }
}

.loggedUserIcon {
  color: #01baef;
}
.user-panel-enter-active {
  transition: all 0.5s ease-out;
}
.user-panel-leave-active {
  transition: all 0.5s ease-in;
}
.user-panel-enter-from,
.user-panel-leave-to {
  transform: translate(20rem);
}
.user-panel-enter-to,
.user-panel-leave-from {
  transform: translate(0rem);
}
</style>