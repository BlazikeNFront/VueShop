<template>
  <div class="userAuth">
    <user-login
      class="userAuth__userLogin"
      :class="{ opacityTransition: !this.showUserLogin }"
      @changeView="changeView"
    ></user-login>
    <user-sign-up
      class="userAuth__userSignUp"
      :class="{ opacityTransition: this.showUserLogin }"
      @changeView="changeView"
    ></user-sign-up>
    <div
      class="userAuth__logoBox"
      :class="{ loginToSignupAnim: !this.showUserLogin }"
    >
      <div class="userAuth__companyLogoText"></div>
      <div
        class="userAuth__companyLogoIcon"
        :class="{ iconReverseAnim: !this.showUserLogin }"
      ></div>
    </div>
  </div>
</template>
<script>
import userLogin from "../../components/userAuth/userLogin.vue";
import UserSignUp from "../../components/userAuth/userSignUp.vue";

export default {
  components: { userLogin, UserSignUp },
  data() {
    return {
      showUserLogin: true, //while true sohw loginform comonent else show signup
    };
  },
  methods: {
    changeView() {
      this.showUserLogin = !this.showUserLogin;
    },
  },
};
</script>
<style lang="scss">
.userAuth {
  @include flexLayout;
  width: 100%;
  height: 50%;
  background-color: #bd4f6c;
  background-image: linear-gradient(326deg, #bd4f6c 0%, #d7816a 74%);
  border-radius: 10px;
  box-shadow: 5px 5px 15px black;
}
.userAuth__logoBox {
  width: 50%;
  height: 70rem;
  right: 5%;
  position: absolute;
  padding: 10rem 0 10rem 0;
  border-radius: 10px;
  transition: all 2s;
}
.userAuth__companyLogoText {
  margin: 0 auto;
  width: 70%;
  height: 50%;
  background-image: url("../../assets/companyTextLogo.png");
  background-size: cover;
}
.userAuth__companyLogoIcon {
  margin: 0 auto;
  width: 60%;
  height: 50%;
  background-image: url("../../assets/companyFishIcon.png");
  background-size: cover;
  transform: scaleX(1);
  transition: all 2s;
}
.userAuth__userLogin {
  margin: 0 auto;
  width: 90%;
  transition: all 0.2s;
  transition-delay: 0.5s;
}
.userAuth__userSignUp {
  margin: 0 auto;
  width: 90%;
  transition: all 0.2s;
  transition-delay: 0.5s;
}

.loginToSignupAnim {
  transition: all 2s;
  transform: translateX(-90%);
}
.opacityTransition {
  opacity: 0;
}

.iconReverseAnim {
  transform: scaleX(-1);
}
</style>