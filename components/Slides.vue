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
      <div class="shares" v-show="loading === false">
        <a
          :href="'https://twitter.com/intent/tweet?url=' + encodeURIComponent(shareURL) + '&text=' + title + '  // mspeakerdeck'"
          target="_blank" rel="noopener">
          <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik02MTIsMTE2LjI1OGMtMjIuNTI1LDkuOTgxLTQ2LjY5NCwxNi43NS03Mi4wODgsMTkuNzcyYzI1LjkyOS0xNS41MjcsNDUuNzc3LTQwLjE1NSw1NS4xODQtNjkuNDExICAgIGMtMjQuMzIyLDE0LjM3OS01MS4xNjksMjQuODItNzkuNzc1LDMwLjQ4Yy0yMi45MDctMjQuNDM3LTU1LjQ5LTM5LjY1OC05MS42My0zOS42NThjLTY5LjMzNCwwLTEyNS41NTEsNTYuMjE3LTEyNS41NTEsMTI1LjUxMyAgICBjMCw5LjgyOCwxLjEwOSwxOS40MjcsMy4yNTEsMjguNjA2QzE5Ny4wNjUsMjA2LjMyLDEwNC41NTYsMTU2LjMzNyw0Mi42NDEsODAuMzg2Yy0xMC44MjMsMTguNTEtMTYuOTgsNDAuMDc4LTE2Ljk4LDYzLjEwMSAgICBjMCw0My41NTksMjIuMTgxLDgxLjk5Myw1NS44MzUsMTA0LjQ3OWMtMjAuNTc1LTAuNjg4LTM5LjkyNi02LjM0OC01Ni44NjctMTUuNzU2djEuNTY4YzAsNjAuODA2LDQzLjI5MSwxMTEuNTU0LDEwMC42OTMsMTIzLjEwNCAgICBjLTEwLjUxNywyLjgzLTIxLjYwNyw0LjM5OC0zMy4wOCw0LjM5OGMtOC4xMDcsMC0xNS45NDctMC44MDMtMjMuNjM0LTIuMzMzYzE1Ljk4NSw0OS45MDcsNjIuMzM2LDg2LjE5OSwxMTcuMjUzLDg3LjE5NCAgICBjLTQyLjk0NywzMy42NTQtOTcuMDk5LDUzLjY1NS0xNTUuOTE2LDUzLjY1NWMtMTAuMTM0LDAtMjAuMTE2LTAuNjEyLTI5Ljk0NC0xLjcyMWM1NS41NjcsMzUuNjgxLDEyMS41MzYsNTYuNDg1LDE5Mi40MzgsNTYuNDg1ICAgIGMyMzAuOTQ4LDAsMzU3LjE4OC0xOTEuMjkxLDM1Ny4xODgtMzU3LjE4OGwtMC40MjEtMTYuMjUzQzU3My44NzIsMTYzLjUyNiw1OTUuMjExLDE0MS40MjIsNjEyLDExNi4yNTh6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
          <span>tweet</span>
        </a>
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
      minHeight: 240,
      originalURL: "",
      shareURL: "",
      loading: true,
      statusMsg: "Loading...",
    };
  },
  props: ["prms"],
  mounted () {
    // Adjust slide size to fit to screen size.
    this.windowWidth = window.innerWidth;

    // Set original URL
    this.originalURL = `https://speakerdeck.com/${this.prms.user}/${this.prms.slideName}`;
    this.shareURL = `https://mspeakerdeck.com/${this.prms.user}/${this.prms.slideName}`;

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
        img.onload = () => {
          // Set slide height to fix resolutions.
          if (vm.minHeight === 240) {
            vm.minHeight = window.innerWidth * (img.height/img.width);
          }
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
  .shares {
    margin: 30px 0 0 0;
    padding: 0 10px;
    text-align: right;
    a {
      display: inline-block;
      padding: 3px 8px 5px 8px;
      border: 1px solid #1d91f2;
      border-radius: 5px;
      background: #1da1f2;
      text-decoration: none;
      img {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        vertical-align: bottom;
      }
      span {
        color: #fff;
      }
    }
  }
}
</style>
