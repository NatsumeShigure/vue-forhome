<template>
  <div class="video-wrap" :style="{width:innerWidth+'px',height:innerHeight+'px'}">
    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :options="playerOptions" @ended="onPlayerEnded" @play="onPlayerPlay" id="video"></video-player>
    <img class="video-img" :class="imgCover" src="/video/20190809170951_758.jpg" @click="onPlay">
  </div>
</template>
<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      imgCover: {
        imgDisplay: false
      },
      playerOptions: {
        sources: [{
          src: "/video/20190813113509_909.mp4"
        }],
        width: window.innerWidth,
        height: window.innerHeight,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false
        }
      },
    }
  },
  methods: {
    onPlayerEnded() {
      this.imgCover.imgDisplay = false;
    },
    onPlayerPlay() {
      this.imgCover.imgDisplay = true;
    },
    onPlay() {
      this.$refs.videoPlayer.player.play();
    },
  },
  created() {
    window.addEventListener("resize", () => {
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerHeight
      this.playerOptions.width = window.innerWidth
      this.playerOptions.height = window.innerHeight
    })
  }
}
</script>
<style scoped>
.video-wrap {
  position: relative;
}
.video-img {
  display: block;
  position: absolute;
  cursor: pointer;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.imgDisplay {
  display: none;
}
#video >>> .vjs-big-play-button,
#video >>> .vjs-control-bar {
  z-index: 100;
}
#video >>> .vjs-tech {
  cursor: pointer;
}
</style>