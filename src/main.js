Vue.config.productionTip = false


new Vue({
  el: "#root",
  data() {
    return {
      //------------ 视频数据在此修改 videoUrl需要和文件名一致 --------------
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
                  title: '互联网与大数据环境下高端装备制造工程管理理论与方法',
                  imgUrl: './image/fengmian/keyanxiangmu-3-1.png',
                  videoUrl: './videos/'
                }
              ]
            },
            {
              title: "国家自然基金重点项目",
              current: false,
              videoList:[
                {
                  title: '智慧管理信息系统',
                  imgUrl: './image/fengmian/keyanxiangmu-4-1.png',
                  videoUrl: './videos/'
                },
                {
                  title: '体内复杂受限环境下腔镜手术机器人三维场景建模与智能控制',
                  imgUrl: './image/fengmian/keyanxiangmu-4-2.png',
                  videoUrl: './videos/'
                }
              ]
            },
            {
              title: "国家自然基金面上项目",
              current: false,
              videoList:[
                {
                  title: '数字化供应链中断中的IT价值创造：基于关系强度和制度距离视角的实证研究',
                  imgUrl: './image/fengmian/keyanxiangmu-5-1.png',
                  videoUrl: './videos/'
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
              title: '教育部重点实验室：过程优化与智能决策五年工作介绍',
              imgUrl: './image/fengmian/keyanjidi-1.png',
              videoUrl: './videos/'
            },
            {
              title: '教育部重点实验室：过程优化与智能决策基本概况',
              imgUrl: './image/fengmian/keyanjidi-2.png',
              videoUrl: './videos/'
            }
          ]
        },
        {
          title:'教 师 风 采',
          current: false,
          videoList: [
            {
              title: '王刚老师',
              imgUrl: './image/fengmian/jiaoshifengcai-1.png',
              videoUrl: './videos/'
            },
            {
              title: '付超老师',
              imgUrl: './image/fengmian/jiaoshifengcai-2.png',
              videoUrl: './videos/'
            },
            {
              title: '裴军老师',
              imgUrl: './image/fengmian/jiaoshifengcai-3.png',
              videoUrl: './videos/'
            },
            {
              title: '杨颖老师',
              imgUrl: './image/fengmian/jiaoshifengcai-4.png',
              videoUrl: './videos/'
            }
          ]
        },
        {
          title:'研 究 论 文',
          current: false,
          videoList: [
            {
              title: 'Leveraging Multisource Heterogeneous Data for Financial Risk Prediction:A Novel Hybrid-Strategy-Based Self-Adaptive Method',
              imgUrl: './image/fengmian/yanjiulunwen-1.png',
              videoUrl: './videos/'
            },
            {
              title: 'Know Where to Invest: Platform Risk Evaluation in Online Lending',
              imgUrl: './image/fengmian/yanjiulunwen-2.png',
              videoUrl: './videos/'
            }
          ]
        },
        {
          title:'科 研 获 奖',
          current: false,
          videoList: [
            {
              title: '轿车整车产品开发系统平台流程与工程管理系统',
              imgUrl: './image/fengmian/keyanhuojiang-1.png',
              videoUrl: './videos/'
            }
          ]
        },
        {
          title:'教 学 研 究',
          current: false,
          videoList: [
            {
              title: '管理科学与工程一流学科研究生培养的模式 创新与能力建设研究与实践',
              imgUrl: './image/fengmian/jiaoxueyanjiu-1.png',
              videoUrl: './videos/'
            }
          ]
        },
        {
          title:'国 际 交 流',
          current: false,
          videoList: [
            {
              title: '高等学校学科创新引智基地',
              imgUrl: './image/fengmian/guojijiaoliu-1.png',
              videoUrl: './videos/'
            }
          ]
        }
      ],

      screenHeight: "",
      screenWidth: "",
      page: 0,
      totalPage: "",
      scrollstatus: true,//滚动状态
      speed: 0.5,
      refreshPicIndex: true,//刷新轮播图位置
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
      let divs = document.querySelectorAll('.main>div')
      let that = this;
      divs.forEach(item => {
        item.style.top = -that.screenHeight * page + "px";
        item.style.transition = "all " + speed + "s" + " ease";
      })
      this.scrollstatus = false;
      setTimeout(() => {
        this.scrollstatus = true;
      }, 400);
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


