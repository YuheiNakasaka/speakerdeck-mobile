<template>
  <div class="content">
    <div>
      <div class="header">
        <h1>Unofficial Mobile Viewer for Speaker Deck</h1>
      </div>
      <div class="form">
        <input type="search" v-model="url" placeholder="https://speakerdeck.com/qrush/how-to-find-gifs"/>
        <div class="btn">
          <button @click="submit">Open</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      url: "",
    }
  },
  mounted() {
    document.querySelector(".content").addEventListener('touchmove', function(e) { e.preventDefault() }, false);
  },
  methods: {
    submit(event) {
      // Avoid zooming with double tap
      event.preventDefault();
      event.stopPropagation();

      const url = this.url.match(/https:\/\/speakerdeck\.com/)
      if (url === null) return;
      const path = this.url.replace(/https:\/\/speakerdeck\.com/, '')
      this.$router.push({path: `${path}`});
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .header {
    width: 100%;
    padding: 0 10px;
    margin-bottom: 20px;
    h1 {
      color: #fff;
    }
  }
  .form {
    width: 100%;
    input {
      width: 90%;
      padding: 20px 15px;
      border-radius: 10px;
      background-color: #fff;
      border: 1px solid #fff;
      outline: none;
      font-size: 16px;
    }
    .btn {
      width: 100%;
      margin-top: 20px;
      text-align: center;
      button {
        width: 50%;
        padding: 10px 25px;
        background: #396;
        color: #FFF;
        text-decoration: none;
        border-color: #396;
        border-bottom: solid 4px #376;
        border-radius: 3px;
        color: #fff;
        font-size: 20px;
      }
      &:active {
        -ms-transform: translateY(4px);
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
        border-bottom: none;
      }
    }
  }
}
</style>
