<template>
  <div>
    <form class="loginForm__form" @submit.prevent="handleSignUp">
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

          <p>{{ formErrors.userNameErrorMsg }}</p>
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
          <p>{{ formErrors.passwordErrorMsg }}</p>
        </div>
      </div>
      <button class="loginFormControl__button loginFormControl__button--signUp">
        Sign Me Up !
      </button>
      <loader v-if="loader"></loader>
      <p class="signUpLink">
        U dont have an account? Click
        <span class="loginForm__routerLink" @click="this.$emit('changeView')"
          >Here</span
        >
        to Log in !
      </p>
    </form>

    <error-modal
      v-if="dialogModal.type"
      @closeDialog="closeErrorModal"
      @confirmError="closeErrorModal"
      ><p class="signUpForm__errorMsg">
        {{ dialogModal.msg }}
      </p>
    </error-modal>
  </div>
</template>
<script>
export default {
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
      dialogModal: {
        type: null,
        msg: null,
      },
    };
  },
  methods: {
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

        const data = await fetch("http://localhost:3000/SignUp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
        const dataJSON = await data.json();

        if (data.status !== 200) {
          this.dialogModal.type = "error";
          this.dialogModal.msg = dataJSON.message;
          this.loader = false;
          return;
        }
        this.dialogModal.type = "confirmation";
        this.dialogModal.msg = dataJSON.message;
        this.loader = false;
      } catch (err) {
        this.loader = false;
        console.log(err.message);
      }
    },
    checkForm() {
      //Requirements -minimum eight characters, at least one letter and one number
      const regexForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      const regexForPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

      if (regexForEmail.test(this.email) === false) {
        this.formErrors.userNameErrorMsg = "Invalid email";
        console.log(!!this.formErrors.userNameErrorMsg);

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
    closeErrorModal() {
      if (this.dialogModal.type === "confirmation") {
        this.$router.push("/");
      }
      this.dialogModal.type = null;
      this.dialogModal.msg = null;
    },
  },
};
</script>
<style lang='scss'>
.loginForm_label {
  font-size: 2rem;
  margin: 0.5rem;
}
.loginForm__form--signUp {
  padding: 5rem 0 10rem 0;
}
.loginForm__signUpInputs {
  margin-top: 5rem;
}
.userInputError {
  border: 2px solid red !important;
}
.signupForm__form {
  border: 2px solid $primary-color;
  margin: 0 auto;
  width: 40rem;
  height: 50rem;
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
.loginFormControl__button--signUp {
  margin-top: 6rem;
}
.signUpForm__errorMsg {
  color: $primiary-color;
  font-size: $font-bg;
}
</style>