<template>
  <div id="header">
    <div>
      <a href="/">MSpeakerDeck</a>
    </div>
    <SwitchBtn></SwitchBtn>
  </div>
</template>

<script>
import SwitchBtn from '~/components/SwitchBtn';

export default {
  components: {SwitchBtn}
}
</script>

<style lang="scss" scoped>
#header {
  width: 100%;
  padding: 15px 10px;
  background-color: #000;
  a {
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }
}
</style>
