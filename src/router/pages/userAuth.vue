<template>
  <div class="userAuth" :class="{ changedHeight: !this.showUserLogin }">
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
    <user-login
      class="userAuth__userLogin"
      :class="{ changeViewTransition: !this.showUserLogin }"
      @changeView="changeView"
    ></user-login>
    <user-sign-up
      :class="{ changeViewTransition: this.showUserLogin }"
      @changeView="changeView"
    ></user-sign-up>
  </div>
</template>
<script>
import userLogin from "../../components/userAuth/userLogin.vue";
import UserSignUp from "../../components/userAuth/userSignUp.vue";

export default {
  components: { userLogin, UserSignUp },

  methods: {
    changeView() {
      if (this.showUserLogin) {
        this.$router.push("/User/signUp");
      } else {
        this.$router.push("/User/login");
      }
    },
  },
  computed: {
    showUserLogin() {
      if (this.$route.params.view === "login") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang="scss">
.userAuth {
  @include flexLayout;
  @include greenToBlueGradient;
  width: 100%;
  height: 55rem;
  border-radius: 10px;
  box-shadow: 5px 5px 15px black;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  transition: all 1s;
}
.userAuth__logoBox {
  width: 100%;
  height: 27rem;

  /*  position: absolute;
  width: 50%;
  height: 70rem;
  right: 5%;
  padding: 10rem 0 10rem 0;
  border-radius: 10px;
  transition: all 2s; */
}

.userAuth__companyLogoText {
  margin: 0 auto;
  width: 70%;
  height: 45%;
  background-image: url("../../assets/companyTextLogo.png");
  background-size: cover;
}
.userAuth__companyLogoIcon {
  margin: 0 auto;
  width: 60%;
  height: 55%;
  background-image: url("../../assets/companyFishIcon.png");
  background-size: cover;
  transform: scaleX(1);
  transition: all 2s;
}

.loginToSignupAnim {
  transition: all 2s;
  /*  transform: translateX(-90%); */
}
.changeViewTransition {
  display: none;
}
.changedHeight {
  height: 70rem;
}
.iconReverseAnim {
  transform: scaleX(-1);
}
</style>