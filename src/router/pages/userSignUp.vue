<template>
  <section class="signUpForm">
    <form @submit.prevent="handleSignUp">
      <base-card>
        <div class="formControl">
          <label for="email">Email:</label>
          <input
            :class="{ userInputError: !!formErrors.userNameErrorMsg }"
            @blur="formErrors.userNameErrorMsg = null"
            type="email"
            id="email"
            v-model.trim="email"
            autocomplete="email"
          />

          <p>{{ formErrors.userNameErrorMsg }}</p>
        </div>
        <div class="formControl">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            autocomplete="current-password"
            v-model.trim="userPassword"
            @blur="formErrors.userPassword = null"
            :class="{ userInputError: formErrors.passwordErrorMsg }"
          />
        </div>
        <div class="formControl">
          <label for="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            autocomplete="current-password"
            @blur="formErrors.userPassword = null"
            v-model.trim="confirmPassword"
            :class="{ userInputError: formErrors.passwordErrorMsg }"
          />
          <p>{{ formErrors.passwordErrorMsg }}</p>
        </div>
        <button class="signUpForm__button">Sign Me Up !</button>
        <loader v-if="loader"></loader>
      </base-card>
    </form>
    <error-modal
      v-if="serverErrorMsg"
      @closeDialog="closeErrorModal"
      @confirmError="closeErrorModal"
      ><p class="signUpForm__errorMsg">
        {{ serverErrorMsg }}
      </p>
    </error-modal>
  </section>
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
      serverErrorMsg: null,
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

        if (dataJSON.status !== 200) {
          this.serverErrorMsg = dataJSON.message;
        }
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
      this.serverErrorMsg = null;
    },
  },
};
</script>
<style lang='scss'>
.signUpForm {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20000;
  form {
    margin: 32% 0 0 50%;
    transform: translate(-50%, -50%);

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
  .userInputError {
    border: 2px solid red !important;
  }
}
.signUpForm__button {
  margin: 1rem;
  background: none;

  padding: 1rem;
  color: $primiary-color;
  border: 1px solid $primiary-color;
}
.signUpForm__errorMsg {
  color: $primiary-color;
  font-size: $font-bg;
}
</style>