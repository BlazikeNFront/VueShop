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
      <div class="loginFormControl__buttonContainer">
        <button>Login</button>
        <loader class="loginFormControl__loader" v-if="loader"></loader>
      </div>
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
      loader: false,
    };
  },
  computed: {
    token() {
      return this.$store.getters["UserAuth/getToken"];
    },
  },
  methods: {
    clearForm() {
      this.userName = null;
      this.userPassword = null;
    },
    cleanFormErrors() {
      this.passwordError = null;
      this.userNameError = null;
      this.serverErrorMsg = null;
    },

    async handleLogin() {
      try {
        this.loader = true;
        console.log(this.userPassword);
        if (this.userName === null || this.userName.split("").length < 5) {
          this.userNameError = "Please insert correct email";
          this.loader = false;
          return;
        }
        if (this.userPassword === null || this.userPassword === "") {
          this.passwordError = "Please insert password";
          this.loader = false;
          return;
        }

        const payload = {
          userName: this.userName,
          password: this.userPassword,
        };

        await this.$store.dispatch("UserAuth/handleLogin", payload);
        this.loader = false;
        this.$router.push({ name: this.nameToRedirectAfterLoginAction });
      } catch (err) {
        console.log(err.status);
        this.loader = false;
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
.loginFormControl__buttonContainer {
  position: relative;
  button {
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
}
.loginFormControl__loader {
  position: absolute;
  right: -7rem;
  top: -2rem;
  transform: scale(0.6);
}
.login .login__modalErrorMsg {
  font-size: $font-bg;
  color: $primiary-color;
}
@media (min-width: 768px) {
  .loginFormControl__loader {
    right: -8rem;
    transform: scale(0.8);
  }
}
@media (min-width: 1024px) {
  .userAuth__userLogin {
    display: block;
    margin: 0;
    width: 50%;
    opacity: 1;
  }
  .signUpLink {
    margin-top: 7rem;
  }
  .loginFormControl__loader {
    top: initial;
    right: initial;
    left: 50%;
    bottom: -8rem;
    transform: translate(-50%);
  }
}
</style>