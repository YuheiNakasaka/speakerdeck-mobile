<template>
  <div>
    <Header></Header>
    <Slides :prms="prms" :item="item"></Slides>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Slides from "~/components/Slides";
import axios from 'axios';

export default {
  components: {Header, Slides},
  asyncData({ params }, callback) {
    let vm = this;
    const SPEAKERDECK_URL = `https://speakerdeck.com/${params.user}/${params.slideName}`;
    const CORS_SERVER_URL = "https://us-central1-koecast-182311.cloudfunctions.net/getSpeakerdeckThumb";

    return axios({
      method: 'post',
      url: CORS_SERVER_URL,
      data: {
        url: SPEAKERDECK_URL,
      }
    }).then((resp) =>{
      callback(null, {
        prms: params,
        item: {
          title: resp.data.title,
          slideId: resp.data.id,
        },
      });
    }).catch((e) => {
      callback({ statusCode: 404, message: `${e}` });
    });
  },
}
</script>

<style lang="scss" scoped>
</style>
