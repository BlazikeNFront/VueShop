<template>
  <div>
    <form class="loginForm__form" @submit.prevent="handleLogin" v-if="!token">
      <div class="loginForm__inputs">
        <div class="loginFormControl">
          <label for="userName" class="loginFormControll__label">Email:</label>
          <input
            class="loginFormControll__input"
            type="email"
            id="userName"
            v-model.trim="userName"
            autocomplete="username"
            placeholder="Email"
          />

          <p v-if="userNameError">{{ this.userNameError }}</p>
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
            placeholder="Password"
          />
          <p v-if="passwordError" class="loginFormControl__errorMsg">
            {{ passwordError }}
          </p>
        </div>
      </div>
      <button class="loginFormControl__button">Login</button>

      <p class="signUpLink">
        U dont have an account? Click
        <span @click="this.$emit('changeView')">Here</span>
        to Sign up !
      </p>
    </form>

    <modal-dialog
      v-if="serverErrorMsg"
      @closeDialog="closeErrorModal"
      @confirmError="closeErrorModal"
    >
      <p class="login__modalErrorMsg">{{}}</p>
    </modal-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginPage: true, //true === userLogin page, false=== signUp page
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
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    changeRoute() {
      this.$router.push({ name: "user-signUp" });
    },
    closeErrorModal() {
      this.serverErrorMsg = null;
    },
  },
  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"];
    },
  },
};
</script>
<style lang='scss'>
.loginForm__form {
  @include flexLayout;
  color: white;
  padding: 10rem 0 10rem 0;
  flex-direction: column;
  width: 100%;
  height: 60rem;
}
.loginForm__inputs {
  @include flexLayout;
  flex-direction: column;
  margin-top: 8rem;
  height: 13rem;
}
.loginFormControl {
  @include flexLayout;
  flex-direction: column;
}
.loginFormControll__label {
  visibility: hidden;
}

.loginFormControll__input {
  width: 30rem;
  font-size: 1.5rem;
  padding: 1rem 0 1rem 1rem;
  border-radius: 5px;
  border: none;
  background-color: #efefef;
}
.signUpLink {
  font-size: $font-md;
  span {
    cursor: pointer;
    font-size: 2rem;
    font-weight: 600;
    color: rgb(62, 175, 124);
  }
}
.loginFormControl__errorMsg {
  color: red;
}
.loginFormControl__button {
  background-color: rgb(62, 175, 124);
  color: White;
  border: none;
  width: 25rem;
  border-radius: 20px;
  padding: 0.5rem;
  font-family: inherit;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 600;
}
.login .login__modalErrorMsg {
  color: $primiary-color;
  font-size: $font-bg;
}
</style>