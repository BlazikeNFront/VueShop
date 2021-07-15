<template>
  <div class="userAuth__userSignUp">
    <form
      class="loginForm__form"
      @click="clearErrors"
      @submit.prevent="handleSignUp"
    >
      <div class="loginForm__inputs loginForm__signUpInputs">
        <div class="loginFormControl">
          <label class="loginForm_label" for="signupEmail">Email:</label>
          <input
            class="loginFormControll__input"
            :class="{ userInputError: !!formErrors.userNameErrorMsg }"
            @blur="formErrors.userNameErrorMsg = null"
            type="email"
            id="signupEmail"
            placeholder="Type your email"
            v-model.trim="email"
            autocomplete="email"
          />

          <p class="loginFormControl__errorMsg">
            {{ formErrors.userNameErrorMsg }}
          </p>
        </div>
        <div class="loginFormControl">
          <label class="loginForm_label" for="signupPassword">Password:</label>
          <input
            class="loginFormControll__input"
            type="password"
            id="signupPassword"
            placeholder="Type your passowrd"
            autocomplete="current-password"
            v-model.trim="userPassword"
            @blur="formErrors.userPassword = null"
            :class="{ userInputError: formErrors.passwordErrorMsg }"
          />
        </div>
        <div class="loginFormControl">
          <label class="loginForm_label" for="confirmPassword"
            >Confirm password:</label
          >
          <input
            class="loginFormControll__input"
            type="password"
            placeholder="Confirm password"
            id="confirmPassword"
            autocomplete="current-password"
            @blur="formErrors.userPassword = null"
            v-model.trim="confirmPassword"
            :class="{ userInputError: formErrors.passwordErrorMsg }"
          />
          <p class="loginFormControl__errorMsg">
            {{ formErrors.passwordErrorMsg }}
          </p>
        </div>
      </div>
      <button class="loginFormControl__button loginFormControl__button--signUp">
        Sign Me Up !
      </button>
      <loader v-if="loader"></loader>

      <p class="signUpLink">
        U already have an account? Click
        <span class="loginForm__routerLink" @click="this.$emit('changeView')"
          >Here</span
        >
        to Log in !
      </p>
    </form>
  </div>
</template>
<script>
import CreateHeaders from "../mixins/createHeaders.js";
export default {
  emits: ["changeView"],
  mixins: [CreateHeaders],
  data() {
    return {
      email: null,
      userPassword: null,
      confirmPassword: null,
      formErrors: {
        passwordErrorMsg: null,
        userNameErrorMsg: null,
      },
      loader: false,
    };
  },
  methods: {
    clearErrors() {
      this.formErrors.passwordErrorMsg = null;
      this.formErrors.userNameErrorMsg = null;
    },
    closeForm() {
      this.$router.push("/");
    },
    async handleSignUp() {
      if (this.checkForm() === false) {
        return;
      }
      try {
        this.loader = true;
        const userData = {
          email: this.email,
          password: this.userPassword,
        };
        const requestHeaders = this.createHeaders();
        const data = await fetch("http://localhost:3000/SignUp", {
          method: "POST",
          headers: requestHeaders,
          body: await JSON.stringify(userData),
        });
        if (data.status === 409) {
          this.$store.dispatch(
            "ModalHandler/showModal",
            "Account with that email address already exist"
          );
          this.loader = false;
          return;
        } else if (data.status !== 200) {
          throw new Error("Couldn't sign up, try again later");
        }
        this.$store.dispatch(
          "ModalHandler/showModal",
          "Account Created, You can now log in"
        );
        this.$router.push("/");
      } catch (err) {
        this.loader = false;
        if (err.body) {
          const error = await err.json();
          this.$store.dispatch("ModalHandler/showModal", error.message);
        } else {
          this.$store.dispatch("ModalHandler/showModal", err.message);
        }
      }
    },
    checkForm() {
      const regexForEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const regexForPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; //Requirements -minimum eight characters, at least one letter and one number

      if (regexForEmail.test(this.email) === false) {
        this.formErrors.userNameErrorMsg = "Invalid email";

        return false;
      }

      if (regexForPassword.test(this.userPassword) === false) {
        this.formErrors.passwordErrorMsg =
          "Password should be minimum eight characters,contain one letter and one number";

        return false;
      }
      if (this.userPassword !== this.confirmPassword) {
        this.formErrors.passwordErrorMsg = "Passwords do not match :(";

        return false;
      }
      this.formErrors.userNameErrorMsg = null;
      this.formErrors.passwordErrorMsg = null;
    },
  },
};
</script>
<style lang='scss'>
.loginForm_label {
  margin: 0.5rem;
  font-size: 2rem;
}
.loginForm__form--signUp {
  padding: 5rem 0 10rem 0;
}
.loginForm__signUpInputs {
  margin-top: 5rem;
}

.signupForm__form {
  margin: 0 auto;
  width: 40rem;
  height: 50rem;
  border: 2px solid $primary-color;
  label {
    margin: 1rem;
    font-size: $font-bg;
  }
}
.loginFormControl__button--signUp {
  margin-top: 2rem;
}
.signUpForm__modal {
  p {
    color: $red-error;
    font-size: $font-bg;
  }
}
.userInputError {
  border: 2px solid $red-error;
}
@media (min-width: 1024px) {
  .userAuth__userSignUp {
    width: 50%;
    opacity: 1;
    transition: all 0.2s;
    transition-delay: 0.5s;
  }
}
</style>