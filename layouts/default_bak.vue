<template>
  <div>
    <div>
      <Menu mode="horizontal" active-name="1">
        <div class="layout-logo">logo</div>
        <div class="layout-nav">
          <MenuItem name="1">
            <Icon type="ios-paper" />
            {{$t('home.introduction')}}
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-paper" />
            {{$t('home.introduction')}}
          </MenuItem>
        </div>
        <div class="clearfix"></div>
      </Menu>
    </div>
    <div>
      <div :style="styleMenuObjectLeft" class="pull-left div-left">
        1
      </div>
      <div class="div-right" style="position: relative">
        <div :style="styleMenuObjectRight" style="padding:10px 10px;">
          <nuxt></nuxt>
        </div>
        <div class="div-footer">footer</div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'layout',
    data () {
      return {
        styleMenuObjectLeft: {
          height: '',
          top:'50px',
          'overflow-y': 'auto',
        },
        styleMenuObjectRight: {
          minHeight: '',
          top:'50px',
          'overflow-y': 'auto',
        }
      }
    },
    created() {
      this.hh();
    },
    methods: {
      hh() {
        if (process.browser) {
          this.styleMenuObjectLeft.height = window.innerHeight - 50 + 'px';
          this.styleMenuObjectRight.minHeight = window.innerHeight - 80 + 'px';
        }
      }
    },
    mounted() {
      // 注：window.onresize只能在项目内触发1次
      var _self = this;
      window.onresize = function () {
        _self.hh();
      }
    }
  }
</script>

<style scoped>
  .div-left {
    width: 200px;
    float: left;
  }
  .div-right{
    margin-left:200px;
    text-align: left;
    border-left:1px solid #dddddd;
  }
  .div-footer{
    height:30px;
    line-height:30px;
    text-align: center;
    background: #dddddd;
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
</style>

