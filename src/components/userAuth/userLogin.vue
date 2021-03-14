<template>
  <section class="loginBox">
    <back-drop @click="$emit('hideLoginForm')"></back-drop>

    <div class="loginForm">
      <form @submit.prevent="handleLogin">
        <div class="loginFormControl">
          <label for="userName" class="loginFormControll__label">Email:</label>
          <input
            class="loginFormControll__input"
            type="email"
            id="userName"
            v-model.trim="userName"
            autocomplete="username"
          />

          <p>{{ this.userNameError }}</p>
        </div>
        <div class="loginFormControl">
          <label for="password" class="loginFormControll__label"
            >Password:</label
          >
          <input
            class="loginFormControll__input"
            type="password"
            id="password"
            v-model.trim="userPassword"
            autocomplete="current-password"
          />
          <p class="loginFormControl__errorMsg">{{ passwordError }}</p>
        </div>
        <button class="loginFormControl__button">Login</button>

        <p class="signUpLink">
          U dont have an account? Click
          <span class="loginForm__routerLink" @click="changeRoute">Here</span>
          to Sign up !
        </p>
      </form>
    </div>
    <error-modal
      v-if="serverErrorMsg"
      @closeDialog="closeErrorModal"
      @confirmError="closeErrorModal"
    >
      <p class="login__modalErrorMsg">{{}}</p>
    </error-modal>
  </section>
</template>
<script>
export default {
  emits: ["hideLoginForm"],
  data() {
    return {
      userName: null,
      userPassword: null,
      passwordError: null,
      userNameError: null,
      serverErrorMsg: null,
    };
  },
  methods: {
    async handleLogin() {
      if (this.userPassword === null || "") {
        this.passwordError = "Please insert password";
        return;
      }
      if (this.userName === null || this.userName.split("").length < 5) {
        this.userNameError = "Please insert correct email";
        return;
      }
      try {
        const payload = {
          userName: this.userName,
          password: this.userPassword,
        };
        await this.$store.dispatch("UserAuth/handleLogin", payload);
        this.$emit("hideLoginForm");
      } catch (err) {
        console.log(err);
      }
    },
    changeRoute() {
      this.$emit("hideLoginForm");
      this.$router.push("/SignUp");
    },
    closeErrorModal() {
      this.serverErrorMsg = null;
    },
  },
};
</script>
<style lang='scss'>
.loginBox {
  width: 15%;
}
.loginForm {
  position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  border-radius: 0 0 0 25px;
  background-color: rgb(0, 0, 0);
  z-index: 20000;
}
.loginFormControl {
  @include flexLayout;
  flex-direction: column;

  background-color: black;
}
.loginFormControll__label {
  margin: 0.5rem;
  font-size: $font-bg;
}

.loginFormControll__input {
  font-size: $font-md;
  background-color: transparent;
  color: $primiary-color;
  border: 1px solid $primiary-color;
}

.loginFormControl__errorMsg {
  color: red;
}
.loginFormControl__button {
  border: 1px solid #33cc80;
  border-radius: 5px;
  padding: 0.5rem;
  background: none;
  text-decoration: none;
  color: #33cc80;
  font-size: 1rem;
}

.signUpLink a {
  color: $primiary-color;
}
.loginForm__routerLink {
  color: $primiary-color;
  cursor: pointer;
}
.login__modalErrorMsg {
  color: $primiary-color;
  font-size: $font-bg;
}
</style>