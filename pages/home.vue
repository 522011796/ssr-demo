<template>
  <section class="container">
    <div>
      <Button @click="changeLocale($event,'en')">英文</Button>
      <Button @click="changeLocale($event,'zh')">中文</Button>
    </div>
    <div>
      {{ $t('home.introduction') }}}
    </div>
    <div>
      <div class="login-info">
        <Form :model="ruleForm" ref="ruleForm" :label-width="0">
          <FormItem label="" prop="username" :rules="$filter_rules({required:true})" style="height:45px;">
            <Input prefix="ios-contact" v-model="ruleForm.username" placeholder="" class="input-height" />
          </FormItem>
          <FormItem label="" prop="password" :rules="$filter_rules({required:true,type:'phone'})" style="height:45px;">
            <Input prefix="ios-contact" v-model="ruleForm.password" placeholder="" class="input-height" />
          </FormItem>
        </Form>
      </div>
      <div style="text-align: center">
        <Button long  style="height:45px;"  @click="handleSubmit('ruleForm')">
          <span>login</span>
        </Button>
      </div>
    </div>
    <div v-for="(item,index) in list" :key="index">
      <div v-html="item.title"></div>
    </div>
  </section>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:'home',
      list:'',
      ruleForm:{
        username:'',
        password:''
      }
    }
  },
  created() {
    this.init();
  },
  methods:{
    init(){
      //console.log(this.$moment().format('dddd'));
      this.$axios.get('/proxy/topics').then(res=>{
        this.list = res.data.data;
      });
    },
    changeLocale(obj,lang) {
      let locale = lang ? lang : Cookies.get('user_lang');
      this.$i18n.locale = locale;
      Cookies.set('user_lang',locale);
    },
    handleSubmit (formName) {
      let _self = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
        }
      });
    }
  }
}
</script>

<style>

</style>

