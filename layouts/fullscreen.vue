<template>
  <div>
    <nuxt></nuxt>
  </div>
</template>
<script>
  export default {
    name: 'fullscreen',
    data () {
      return {

      }
    },
    created() {
      this.hh();
    },
    methods: {
      hh() {
        if (process.browser) {
          /*this.styleMenuObjectLeft.height = window.innerHeight-60 + 'px';
          this.styleMenuObjectRight.minHeight = window.innerHeight-60 + 'px';
          this.$nextTick(function () {
            this.loadingShow = true;
          });*/
        }
      }
    },
    mounted() {
      // 注：window.onresize只能在项目内触发1次
      var _self = this;
      if (process.browser) {
        window.onresize = function () {
          _self.hh();
        }
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        localStorage.setItem('activeMenu','dir1');
      }
    }
  }
</script>

<style scoped>
  .header{
    background: #ffffff;
    position: fixed;
    width: 100%;
    z-index: 2;
  }
  .div-left {
    width: 200px;
    float: left;
    background: #f8f8f9;
    position: fixed;
    top:60px;
  }
  .div-right{
    margin-left:200px;
    text-align: left;
    border-left:1px solid #dddddd;
    background: #f8f8f9;
    padding:10px 10px;
    position: relative;
    top:60px;
    z-index: 1;
  }
  .div-footer{
    height:30px;
    line-height:30px;
    text-align: center;
    background: #f8f8f9;
  }
  .layout-logo{
    float: left;
    position: relative;
    width: 200px;
    height:100%;
    text-align: center;
  }
  .layout-nav{
    margin-left: 200px;
    height:100%;
    position: relative;
  }
  .clearfix{
    clear:both;
  }
  .hidden{
    display: none !important;
  }
  .show{
    display: block !important;
  }
</style>

