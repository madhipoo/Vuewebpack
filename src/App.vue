<template>
  <div id="app">
    <!-- <HelloWorld/> -->
    <!--<router-view name="menu"></router-view>-->
    <div >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    const api = `${process.env.APIPATH}/api/${process.env.COSTOMPATH}/products`;//'https://vue-course-api.hexschool.io/api/leviathan91608/products';
    //API 伺服器路徑
    // 所申請的APIPath
    // console.log(process.env.APIPATH, process.env.COSTOMPATH)

    this.$http.get(api).then((response) => {
      console.log(response.data)
    });
  },
};
</script>
<style lang="scss">
  @import "./assets/all";
</style>

