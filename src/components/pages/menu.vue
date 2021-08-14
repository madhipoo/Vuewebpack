<template>
  <div class="hello my-3">
  <ul class="nav">
  <li class="nav-item">
    <router-link class="nav-link" to="/page/">卡片 1</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/page/child2">卡片 2</router-link>
  </li>
  <li class="nav-item">
     <router-link class="nav-link" to="/page/child3">卡片 3</router-link>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link" @click.prevnet="updatePath">切換到指定頁面</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link" @click.prevnet="beforePath">回到上頁</a>
  </li>

</ul>  
</div>
  </div>
</template>

<script>
export default {
  data(){
      return{};
  },
  methods: {
      updatePath(){
          this.$router.push('/page/child2')
      },
      beforePath(){
          this.$router.back()
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
