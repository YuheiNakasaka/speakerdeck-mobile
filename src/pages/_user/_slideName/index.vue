<template>
  <div>
    <Header></Header>
    <Slides :prms="prms"></Slides>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Slides from "~/components/Slides";

export default {
  components: {Header, Slides},
  asyncData: ({ params }) => ({
    prms: params,
  }),
}
</script>

<style lang="scss" scoped>
</style>
