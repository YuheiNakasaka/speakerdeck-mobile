<template>
  <div class="btn">
    <button @click="switchSlideImageType">{{ slideImageType === 2 ? 'Small' : 'Original' }}</button>
  </div>
</template>

<script>
export default {
  computed: {
    slideImageType() {
      return this.$store.getters.slideImageType;
    }
  },
  methods: {
    switchSlideImageType() {
      this.$store.dispatch('switchSlideImageType');
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  right: 10px;
  top: 10px;
  text-decoration: none;
  button {
    width: 75px;
    padding: 5px 10px;
    font-size: 14px;
    color: #fff;
    background-color: #396;
    border-color: #396;
    border-radius: 4px;
    border-bottom: solid 4px #376;
  }
  &:active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    border-bottom: none;
  }
}
</style>
