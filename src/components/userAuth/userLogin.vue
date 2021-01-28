<template>
  <section class="loginForm">
    <form @submit.prevent="handleLogin">
      <div class="formControl">
        <label for="userName">Email:</label>
        <input
          type="email"
          id="userName"
          v-model.trim="userName"
          autocomplete="username"
        />

        <p>{{ this.userNameError }}</p>
      </div>
      <div class="formControl">
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model.trim="userPassword"
          autocomplete="current-password"
        />
        <p>{{ passwordError }}</p>
      </div>
      <button>Login</button>
    </form>
  </section>
</template>
<script>
export default {
  data() {
    return {
      userName: null,
      userPassword: null,
      passwordError: null,
      userNameError: null,
    };
  },
  methods: {
    handleLogin() {
      if (this.userPassword === null || "") {
        this.passwordError = "Please insert password";
        return;
      }
      if (this.userName === null || this.userName.split("").length < 5) {
        this.userNameError = "Please insert correct email";
        console.log("woroks");
        return;
      }
    },
  },
};
</script>
<style lang='scss'>
.loginForm {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20000;
  form {
    margin: 32% 0 0 50%;
    transform: translate(-50%, -50%);
    padding: 9%;
    padding-top: 3%;
    border: 2px solid $primiary-color;
    border-radius: 10px;
    background-color: black;
    label {
      margin: 1rem;
      font-size: $font-bg;
    }
    .formControl {
      @include flexLayout;
      flex-direction: column;
      margin: 2rem;

      input {
        width: 100%;
        font-size: $font-md;
        background-color: transparent;
        color: $primiary-color;
        border: 2px solid $primiary-color;
        padding: 5%;
      }
    }

    p {
      color: red;
    }
  }
}
</style>