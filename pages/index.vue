<template>
  <div>
    <Header></Header>
    <HomeForm></HomeForm>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "~/components/Header";
import HomeForm from "~/components/HomeForm";
import Footer from "~/components/Footer";

export default {
  components: {Header, HomeForm, Footer}
}
</script>

<style lang="scss" scoped>
</style>
