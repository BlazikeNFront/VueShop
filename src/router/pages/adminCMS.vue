<template>
  <section class="adminCMS">
    <h3 class="adminCMS__h3">Hello Mr.Admin. What you want to do today ?</h3>
    <div class="adminCMS__options">
      <router-link class="adminCMS__a" to="/Admin/AddProduct"
        >Add product</router-link
      >
      <router-link class="adminCMS__a" to="/Admin/Orders"
        >Check Orders</router-link
      >
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.adminCMS {
  width: 100%;
  height: 100%;
}
.adminCMS__h3 {
  font-size: $font-bg;
  color: $primiary-color;
  margin: 3rem;
}
.adminCMS__options {
  @include flexLayout;
  width: 50%;
  margin: 0 auto;
}
.adminCMS__a {
  @include mainBorder;
  padding: 3rem;
  color: $primiary-color;
  font-size: $font-md;
}
</style>