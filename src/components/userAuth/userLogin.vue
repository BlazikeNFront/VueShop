<template>
  <div class="userAuth__userLogin">
    <form
      class="loginForm__form"
      @click="cleanFormErrors"
      @submit.prevent="handleLogin"
      v-if="!token"
    >
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
          <p v-if="serverErrorMsg" class="loginFormControl__errorMsg">
            {{ serverErrorMsg }}
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
  </div>
</template>
<script>
export default {
  emits: ["changeView"],

  data() {
    return {
      nameToRedirectAfterLoginAction:
        this.$route.params.redirectAfterLogin || "main-page",
      loginPage: true, //true === userLogin page, false=== signUp page
      userName: null,
      userPassword: null,
      passwordError: null,
      userNameError: null,
      serverErrorMsg: null,
    };
  },
  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"];
    },
  },
  methods: {
    cleanFormErrors() {
      this.passwordError = null;
      this.userNameError = null;
      this.serverErrorMsg = null;
    },

    async handleLogin() {
      try {
        if (this.userPassword === null || "") {
          this.passwordError = "Please insert password";
          return;
        }
        if (this.userName === null || this.userName.split("").length < 5) {
          this.userNameError = "Please insert correct email";
          return;
        }

        const payload = {
          userName: this.userName,
          password: this.userPassword,
        };

        await this.$store.dispatch("UserAuth/handleLogin", payload);
        this.$router.push({ name: this.nameToRedirectAfterLoginAction });
      } catch (err) {
        console.log(err.status);
        if (err.status === 402) {
          this.serverErrorMsg = "User with that email does not exist";
        } else if (err.status === 403) {
          this.serverErrorMsg = "Incorrect password";
        } else {
          this.serverErrorMsg = "Couldnt authenticate user :( Try again later";
        }
      }
    },
    changeRoute() {
      this.$router.push({ name: "user-signUp" });
    },
  },
};
</script>
<style lang='scss'>
.userAuth__userLogin {
  margin: 0 auto;
  width: 90%;
  transition: all 0.2s;
  transition-delay: 0.5s;
}
.loginForm__form {
  @include flexLayout;
  width: 100%;
  flex-direction: column;
  color: white;
}
.loginForm__inputs {
  @include flexLayout;
  margin: 2rem;
  flex-direction: column;
}
.loginFormControl {
  @include flexLayout;
  margin-bottom: 1rem;
  flex-direction: column;
}
.loginFormControll__label {
  visibility: hidden;
}

.loginFormControll__input {
  width: 25rem;
  padding: 1rem 0 1rem 1rem;
  border: none;
  border-radius: 5px;

  background-color: #efefef;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: 600;
}
.signUpLink {
  margin: 3rem;
  font-size: 1.5rem;
  span {
    font-size: 2rem;
    font-weight: 600;
    color: #2c3e50;
    cursor: pointer;
  }
}
.loginFormControl__errorMsg {
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: $red-error;
}
.loginFormControl__button {
  width: 25rem;
  padding: 0.5rem;
  background-color: white;
  border: none;
  border-radius: 20px;
  font-family: inherit;
  font-size: 2.5rem;
  font-weight: 600;
  text-decoration: none;
  color: #2c3e50;
}
.login .login__modalErrorMsg {
  font-size: $font-bg;
  color: $primiary-color;
}
@media (min-width: 1024px) {
  .userAuth__userLogin {
    display: block;
    margin: 0;
    width: 50%;
    opacity: 1;
  }
}
</style>