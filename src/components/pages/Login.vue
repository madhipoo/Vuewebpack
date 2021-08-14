<template>
  <div class=" my-3">
    <form class="form-signin" @submit.prevent="signin">
        
        <h1 class="h3 mb-3 fw-normal">請先登入</h1>

        <div class="form-floating">
        <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com" v-model="user.username">
        <label for="inputEmail">Email address</label>
        </div>
        <div class="form-floating">
        <input type="password" class="form-control" id="inputPassword" placeholder="Password" v-model="user.password">
        <label for="inputPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
        <label>
            <input type="checkbox" value="remember-me"> Remember me
        </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        user:{
            username:'',
            password:'',
        }
        
    }
  },
  methods:{
      signin(){
        const api = `${process.env.APIPATH}/admin/signin`;//'https://vue-course-api.hexschool.io/api/leviathan91608/products';
        const vm = this;
        //post : 這邊將用戶的資料傳入

        this.$http.post(api,vm.user).then((response) => {
            console.log(response.data)
            if(response.data.success){
                const token = response.data.token;
                const expired = response.data.expired;
                console.log(token,expired)
                document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
                vm.$router.push('/admin/products');
            }
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html,
    body {
    height: 100%;
    }

    body {
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: #f5f5f5;
    }

    .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    }

    .form-signin .checkbox {
    font-weight: 400;
    }

    .form-signin .form-floating:focus-within {
    z-index: 2;
    }

    .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    }
</style>