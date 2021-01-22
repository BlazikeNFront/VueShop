<template>
  <div class="phoneContactInfo">
    <div class="phoneIconImg"></div>
    <p>0123 456 780</p>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss'>
.phoneContactInfo {
  @include flexLayout;
  background-color: white;

  border-radius: 15px;

  .phoneIconImg {
    background-image: url("../../../assets/icons/phone.png");
    width: 50%;
    height: 50%;

    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>