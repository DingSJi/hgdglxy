// 轮播图组件
const slide = Vue.extend({
  name: "slide",
  template: `
    <div class="slide">
      <div class="leftArrow" v-if="videoList.length>4" @click="leftArrowTap"></div>
      <div class="slideShow" :style="videoList.length>4?'':centerStyleObj">
          <div class="cards" ref="cards">
              <div class="card" v-for="item in videoList">
                  <img :src="item.imgUrl" alt="">
                  <div class="play" @click="showVideo(item)">
                      <img src="./image/bofang.png" alt="">
                  </div>
                  <div class="title" :title="item.title">{{item.title}}</div>
              </div>
          </div>
      </div>
      <div class="rightArrow" v-if="videoList.length>4" @click="rightArrowTap"></div>
    </div>
  `,
  mounted() {
    this.videoList = this.videos;
  },
  props: ['videos'],
  data() {
    return {
      videoList: [],
      picIndex: 0,
      centerStyleObj: {//小于四个元素时居中
        display: 'flex',
        justifyContent: 'center'
      },
    }
  },
  watch: {
    videos(newval){
      this.videoList = newval;
    }
  },
  methods: {
    // 轮播图左右切换按钮点击
    leftArrowTap(){
      this.picIndex--;
      if (this.picIndex < 0) {
          this.picIndex = 0;
          return;
      }
      this.slideImg();
    },
    rightArrowTap(){
      this.picIndex++;
      let piclength = this.videoList.length;
      if (this.picIndex > piclength - 4) {
          //总数减4
          this.picIndex = piclength - 4;
          return;
      }
      this.slideImg();
    },
    // 轮播图切换方法
    slideImg() {
      let width = -1 * 262 * this.picIndex;
      this.$refs.cards.style.left = width + 'px';
    },
    // 点击播放视频
    showVideo(row) {
      this.$emit('play',row.videoUrl)
    },
  },
})

Vue.component('slide', slide);
