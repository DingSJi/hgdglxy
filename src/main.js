Vue.config.productionTip = false

new Vue({
  el: "#root",
  data() {
    return {
      screenHeight: "",
      screenWidth: "",
      page: 0,
      totalPage: "",
      scrollstatus: true,//滚动状态
      speed: 300,
      refreshPicIndex: true,//刷新轮播图位置

      sections:[
        {
          title:'科 研 项 目',
          current: true,
          videoList: [
            {
              title: '基础科学中心',
              current: true,
              videoList: [
                {
                  title: '智能互联系统的系统工程理论及应用总体概况',
                  imgUrl: './image/fengmian/keyanxiangmu-1-1.png',
                  videoUrl: './videos/视频示例.mp4'
                },
                {
                  title: '智能互联时代的系统工程理论与方法',
                  imgUrl: './image/fengmian/keyanxiangmu-1-2.png',
                  videoUrl: './videos/视频示例2.mp4'
                },
                {
                  title: '智能互联系统中的核心信息技术',
                  imgUrl: './image/fengmian/keyanxiangmu-1-3.png',
                  videoUrl: './videos/'
                },
                {
                  title: '航空发动机数字化研制工程',
                  imgUrl: './image/fengmian/keyanxiangmu-1-4.png',
                  videoUrl: './videos/'
                },
                {
                  title: '数字化航空器总装工厂设计',
                  imgUrl: './image/fengmian/keyanxiangmu-1-5.png',
                  videoUrl: './videos/'
                },
                {
                  title: '城市综合能源系统',
                  imgUrl: './image/fengmian/keyanxiangmu-1-6.png',
                  videoUrl: './videos/'
                }
              ],
            },
            {
              title: "国家自然基金科学基金研究群体项目",
              current: false,
              videoList:[
                {
                  title: '互联网与大数据环境下面向企业的决策理论与方法研究',
                  imgUrl: './image/fengmian/keyanxiangmu-2-1.png',
                  videoUrl: './videos/视频示例.mp4'
                }
              ]
            },
            {
              title: "国家自然科学基金重大项目",
              current: false,
              videoList:[
                {
                  title: '互联网与大数据环境下 高端装备制造工程管…',
                  imgUrl: './image/fengmian/封面示例.jpg',
                  videoUrl: './videos/视频示例.mp4'
                }
              ]
            },
            {
              title: "国家自然基金重点项目",
              current: false,
              videoList:[
                {
                  title: '智慧管理信息系统',
                  imgUrl: './image/fengmian/封面示例.jpg',
                  videoUrl: './videos/视频示例.mp4'
                },
                {
                  title: '体内复杂受限环境下腔 镜手术机器人三维场…',
                  imgUrl: './image/fengmian/封面示例.jpg',
                  videoUrl: './videos/视频示例.mp4'
                }
              ]
            },
            {
              title: "国家自然基金面上项目",
              current: false,
              videoList:[
                {
                  title: '数字化供应链中断中的 IT价值创造：基于关…',
                  imgUrl: './image/fengmian/封面示例.jpg',
                  videoUrl: './videos/视频示例.mp4'
                }
              ]
            },
            
          ]
        },
        {
          title:'科 研 基 地',
          current: false,
          videoList: [
            {
              title: '智能互联系统的系统工 程理论及应用总体概况',
              imgUrl: './image/fengmian/封面示例.jpg',
              videoUrl: './videos/视频示例.mp4'
            }
          ]
        },
        {
          title:'教 师 风 采',
          current: false,
          videoList: [
            {
              title: '智能互联系统的系统工 程理论及应用总体概况',
              imgUrl: './image/fengmian/封面示例.jpg',
              videoUrl: './videos/视频示例.mp4'
            }
          ]
        },
        {
          title:'研 究 论 文',
          current: false,
          videoList: [
            {
              title: '智能互联系统的系统工 程理论及应用总体概况',
              imgUrl: './image/fengmian/封面示例.jpg',
              videoUrl: './videos/视频示例.mp4'
            }
          ]
        },
        {
          title:'科 研 获 奖',
          current: false,
          videoList: [
            {
              title: '智能互联系统的系统工 程理论及应用总体概况',
              imgUrl: './image/fengmian/封面示例.jpg',
              videoUrl: './videos/视频示例.mp4'
            }
          ]
        },
        {
          title:'教学研究',
          current: false,
          videoList: [
            {
              title: '智能互联系统的系统工 程理论及应用总体概况',
              imgUrl: './image/fengmian/封面示例.jpg',
              videoUrl: './videos/视频示例.mp4'
            }
          ]
        },
        {
          title:'国际交流',
          current: false,
          videoList: [
            {
              title: '智能互联系统的系统工 程理论及应用总体概况',
              imgUrl: './image/fengmian/封面示例.jpg',
              videoUrl: './videos/视频示例.mp4'
            }
          ]
        }
      ],
      videos1: [],//传给第一页组件的数据
      actvideo: {
        src: '',
      }
    }
  },
  mounted() {
    this.screenWidth = document.body.clientWidth;
    this.screenHeight = document.body.clientHeight;
    this.totalPage = this.$refs.main.children.length;


    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        this.screenHeight = document.body.clientHeight;
        this.scroll(this.page, 0);
        this.$refs.first.style.minWidth = this.screenHeight / 0.675 + "px";
        this.$refs.footer.style.minWidth = this.screenHeight / 0.675 + "px";
      })();
    };
    // 监听鼠标滚轮
    window.addEventListener('mousewheel',this.scrollDirection);

    this.videos1 = this.sections[0].videoList[0].videoList;

  },
  watch: {
    refreshPicIndex(){
      this.$refs.slide1.picIndex = 0;
      this.$refs.slide2.picIndex = 0;
      this.$refs.slide3.picIndex = 0;
      this.$refs.slide4.picIndex = 0;
    },
  },
  methods: {
    // 点击左侧索引
    sectionSelect(row,index){
      this.page = index;
      this.refreshPicIndex = !this.refreshPicIndex;
      this.sections.forEach(item => {
        item.current = false;
      })
      row.current = true;
      // this.slideImg();
      this.scroll(this.page, this.speed);
    },
    sectionEnter(row){
      row.current = true;
    },
    sectionLeave(row,index){
      if(this.page==index){
        return;
      }else{
        row.current = false;
      }
    },

    // 点击第一页横向索引
    selectBar(row,index){
      this.sections[0].videoList.forEach(item => {
        item.current = false;
      })
      row.current = true;
      let scrollleft = 0;
      for(let i=0;i<index;i++){
        scrollleft = this.$refs.indexBar.children[i].offsetLeft - this.screenWidth * 0.15
      }
      this.$refs.indexBar.scrollLeft = scrollleft;

      this.videos1 = this.sections[0].videoList[index].videoList;

    },
    barWheel(e){
      if(e.deltaY!=0){
        this.$refs.indexBar.scrollLeft += e.deltaY
      }
    },

    // 页面上下滚动
    scroll(page, speed) {
      this.sections.forEach(item => {
        item.current = false;
      })
      this.sections[page].current = true;
      this.scrollstatus = false;
      let that = this;
      $(".main>div").animate(
          {
              top: -that.screenHeight * page,
          },
          that.speed,
          function () {
              setTimeout(() => {
                  that.scrollstatus = true;
              }, 300);
          }
      );
    },
    // 判断滚轮方向
    scrollDirection(e){
      if(this.scrollstatus){
        this.refreshPicIndex = !this.refreshPicIndex;
        // this.slideImg();
        if (e.deltaY > 0) {
            this.page++;
            if (this.page > this.totalPage -1) {
                return (this.page = this.totalPage -1);
            } else {
                this.scroll(this.page, this.speed);
            }
            // console.log("下滑",this.page);
        } else {
            this.page--;
            if (this.page < 0) {
                return (this.page = 0);
            } else {
                this.scroll(this.page, this.speed);
            }
            // console.log("上滑",this.page);
        }
      }
    },
    // 播放视频
    playVideo(src) {
      this.actvideo.src = src;
      console.log('video',this.actvideo);
    },
    outervideo(e){
      if(e.target.className == "videos"){
        console.log(this.$refs.video);
        this.$refs.video.paused = true;
        this.actvideo.src = "";
      }else{
        this.$refs.video.paused = true;
      }
    }
  },
})


// 轮播图组件
const slide = Vue.extend({
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
                  <div class="title">{{item.title}}</div>
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
      console.log(row);
      this.$emit('play',row.videoUrl)
    },
  },
})

Vue.component('slide', slide);