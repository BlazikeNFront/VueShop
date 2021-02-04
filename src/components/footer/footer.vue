<template>
  <footer>
    <div class="footerSingleList">
      <h3 class="footerSingleList__title">COMPANY</h3>
      <ul class="footerSingleList__listBox">
        <li class="footerSingleList__listElement"><p>About Us</p></li>
        <li class="footerSingleList__listElement"><p>Partners</p></li>
        <li class="footerSingleList__listElement"><p>TAIMEN Support</p></li>
        <li class="footerSingleList__listElement">
          <p>Terms and condition</p>
        </li>
      </ul>
    </div>
    <div class="footerSingleList">
      <h3 class="footerSingleList__title">ACCOUNT</h3>
      <ul class="footerSingleList__listBox">
        <li class="footerSingleList__listElement"><p>Account</p></li>
        <li class="footerSingleList__listElement"><p>Sign in</p></li>
        <li class="footerSingleList__listElement"><p>Sign Up</p></li>
        <li class="footerSingleList__listElement"><p>Orders</p></li>
      </ul>
    </div>
    <div class="footerSingleList">
      <h3 class="footerSingleList__title">CONTACT US</h3>
      <ul class="footerSingleList__listBox">
        <li class="footerSingleList__listElement">
          <div class="footerSingleList__box">
            <font-awesome-icon
              :icon="['fas', 'map-marker-alt']"
            ></font-awesome-icon>
            <p class="footerSingleList__paragraph">
              2534 London Suite B Downers Grove, IL 60515
            </p>
          </div>
        </li>
        <li class="footerSingleList__listElement">
          <div class="footerSingleList__box">
            <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
            <p class="footerSingleList__paragraph">sales@taimen.com</p>
          </div>
        </li>
        <li class="footerSingleList__listElement">
          <div class="footerSingleList__box">
            <font-awesome-icon :icon="['fas', 'envelope']"></font-awesome-icon>
            <p class="footerSingleList__paragraph">support@taimen.com</p>
          </div>
        </li>
        <li class="footerSingleList__listElement">
          <div class="footerSingleList__box">
            <font-awesome-icon :icon="['fas', 'phone']"></font-awesome-icon>
            <p class="footerSingleList__paragraph">888-777-666</p>
          </div>
        </li>
        <li class="footerSingleList__listElement">
          <div class="footerSingleList__box">
            <font-awesome-icon :icon="['fas', 'fax']"></font-awesome-icon>
            <p class="footerSingleList__paragraph">(324) 534-8824</p>
          </div>
        </li>
      </ul>
      <div class="icons">
        <font-awesome-icon :icon="['fab', 'facebook']"></font-awesome-icon>
        <font-awesome-icon :icon="['fab', 'twitter']"></font-awesome-icon>
        <font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style lang='scss'>
footer {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color: white;
}
.footerSingleList {
  width: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
}
.footerSingleList__title {
  text-align: center;
  font-size: $font-bg;
}
.footerSingleList__listBox {
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}
.footerSingleList__box {
  @include flexLayout;
  justify-content: left;
}
.footerSingleList__listElement {
  padding: 1rem;
  font-size: $font-md;
  width: inherit;
  text-align: inherit;
}
.footerSingleList__paragraph {
  text-align: left;
  margin-left: 0.7rem;
}
.icons {
  margin: 1rem 0;
  width: 100%;
  @include flexLayout;
  justify-content: space-around;
  font-size: $font-bg;
}
</style>