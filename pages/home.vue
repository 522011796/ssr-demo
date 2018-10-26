<template>
  <section class="container">
    <div>
      <Button @click="changeLocale($event,'en')">英文 {{ $t('home.introduction') }}</Button>
      <Button @click="changeLocale($event,'zh')">中文 {{ $t('home.introduction') }}</Button>
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
      list:''
    }
  },
  created() {
    this.init();
  },
  methods:{
    init(){
      this.$axios.get('/proxy/topics').then(res=>{
        this.list = res.data.data;
      });
    },
    changeLocale(obj,lang) {
      let locale = lang ? lang : Cookies.get('user_lang');
      this.$i18n.locale = locale;
      //this.$store.state.locale = locale;
      this.$store.commit('SET_LANG', locale)
      Cookies.set('user_lang',locale);
    },
  }
}
</script>

<style>

</style>

