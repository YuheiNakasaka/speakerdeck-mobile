<template>
  <section class="content">
    <div>
      <div>
        <h1><a :href="originalURL" target="_blank" class="original-link">{{ title }}</a></h1>
      </div>
      <div class="slides">
        <p v-show="slideIds.length === 0">{{ statusMsg }}</p>
        <div v-for="i in slideIds" :key="i" class="slide">
          <img
            :src="imgUrl(i)"
            :style="'width:' + windowWidth + 'px; min-height:' + minHeight + 'px;'"
            v-show="slideViewables[i]"/>
        </div>
      </div>
      <div class="controls" v-show="loading === false">
        <div class="btn left">
          <button @click="clickPrev">PREV</button>
        </div>
        <div class="btn right" :class="isLastSlide() ? 'last' : ''">
          <button @click="clickNext">NEXT</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import is from 'is_js';

export default {
  data: () => {
    return {
      title: "",
      slideId: "",
      currentId: 0,
      MAX_SLIDE_COUNT: 10000,
      slideCount: 10000,
      slideViewables: [],
      slideIds: [],
      windowWidth: 300,
      minHeight: 0,
      originalURL: "",
      loading: true,
      statusMsg: "Loading...",
    };
  },
  props: ["prms"],
  mounted () {
    // Prevent scroll
    document.querySelector(".content").addEventListener('touchmove', function(e) { e.preventDefault() }, false);

    // Adjust slide size to fit to screen size.
    this.windowWidth = window.innerWidth;

    // Set original URL
    this.originalURL = `https://speakerdeck.com/${this.prms.user}/${this.prms.slideName}`;

    // Get slide data
    this.getSlideData().then((resp) => {
      // Init slides
      this.title = resp.data.title;
      this.slideId = resp.data.id;
      this.slideIds.push(0, 1, 2);
      this.slideViewables.push(true, false, false);
      this.loading = false;
    });
  },
  methods: {
    clickPrev() {
      if (this.currentId === 0) return;
      this.slideViewables.splice(this.currentId, 1, false);
      this.currentId--;
      this.slideViewables.splice(this.currentId, 1, true);
    },
    clickNext(event) {
      // Avoid zooming with double tap
      event.preventDefault();
      event.stopPropagation();

      // condition of stop going next
      if (this.slideCount - this.currentId < 1) return;

      // if set slideCount, stop pushing id to array
      // to avoid increasing waste item
      if (this.slideCount === this.MAX_SLIDE_COUNT) {
        const lastId = this.slideIds[this.slideIds.length - 1];
        this.slideIds.push(lastId + 1);
      }

      this.slideViewables.splice(this.currentId, 1, false);
      this.currentId++;
      this.slideViewables.splice(this.currentId, 1, true);
    },
    isLastSlide() {
      return this.slideCount - this.currentId === 0
    },
    imgUrl(id) {
      let vm = this;
      // Switch slide image type
      const imageName = this.$store.getters.slideImageType === 2 ? "thumb_slide_" : "slide_";
      // Sorry for using direct link of Speaker Deck 🙏
      const baseURL = `https://speakerd.s3.amazonaws.com/presentations/${this.slideId}/${imageName}`;
      const ext = ".jpg";

      // Check slide count by seeing response of each imgs
      if (vm.slideCount === this.MAX_SLIDE_COUNT) {
        const img = new Image();
        // Set slide height to fix resolutions.
        if (vm.minHeight === 0) {
          vm.minHeight = window.innerWidth * (img.height/img.width);
        }
        img.onerror = () => {
          vm.slideCount = id - 1;
        }
        img.src = baseURL + id + ext;
      }
      return baseURL + id + ext;
    },
    getSlideData() {
      let vm = this;
      const SPEAKERDECK_URL = `https://speakerdeck.com/${this.prms.user}/${this.prms.slideName}`;
      const CORS_SERVER_URL = "https://us-central1-koecast-182311.cloudfunctions.net/getSpeakerdeckThumb";

      if (!is.mobile()) {
        window.location.href = SPEAKERDECK_URL;
        return new Promise((resolve, reject) => {resolve(0)});
      }

      return new Promise((resolve, reject) => {
        return axios({
          method: 'post',
          url: CORS_SERVER_URL,
          data: {
            url: SPEAKERDECK_URL,
          }
        }).then((resp) =>{
          resolve(resp);
        }).catch((e) => {
          vm.statusMsg = "Network error";
          reject(e)
        });
      });
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    padding: 10px;
    text-align: left;
    font-size: 1.1em;
    .original-link {
      color: #fff;
      text-decoration: none;
    }
  }
  .slides {
    p {
      margin-bottom: 20px;
      font-size: 1.5em;
      color: #fff;
    }
  }
  .controls {
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      width: 50%;
      margin: 10px;
      text-decoration: none;
      background: #396;
      color: #FFF;
      border-bottom: solid 4px #376;
      border-radius: 3px;
      button {
        width: 100%;
        padding: 20px 25px;
        background: #396;
        color: #fff;
        font-size: 20px;
      }
      &:active {
        -ms-transform: translateY(4px);
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
        border-bottom: none;
      }
      &.last {
        background: #999;
        border-bottom: solid 4px #999;
        button {
          background: #999;
        }
      }
    }
  }
}
</style>
