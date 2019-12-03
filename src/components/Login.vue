<template>
  <div class="content">
    <form class="form-signin text-center" @submit.prevent="login">
        <!-- <img class="form-logo mb-4" src="https://thememakker.com/wrap-theme/compass/hospital/assets/images/logo.svg" alt="" width="72" height="72"> -->
        <h1 class="h3 mb-4 heading-primary">留言板登入</h1>
        
        <div class="form__group">
            <label for="faccount" class="form__label">帳號</label>
            <input v-model="follower.faccount" type="text" class="form__input" placeholder="請輸入帳號" id="faccount" required>
            
        </div>
        <div class="form__group">
            <label for="pwd" class="form__label">密碼</label>
            <input v-model="follower.pwd" type="password" class="form__input" placeholder="請輸入密碼" id="pwd" required>
            
        </div>
        
        <div class="checkbox mb-3" style="float: left" v-if="!message == ''">
            <label class="login-msg danger">{{ message }}</label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        <router-link class="btn btn-outline-primary btn-md" :to="{ name: 'Signup'}">註冊</router-link>
        <p class="mt-5 mb-3 text-muted">php作業</p>
    </form>
    
  </div>
</template>

<script>

export default {
    name: 'Login',
    data(){
        return{
            follower: {
                faccount: "",
                pwd: "",
            },
            message: "",
            token: ""

        }
    },
    methods:{
        login(){
            const api = `/api/logIn`;
            console.log(api);
            const vm = this;
            console.log(vm.follower);
            vm.$http.post(api, vm.follower).then((res) => {
                vm.token = res.data;
                localStorage["token"] = vm.token;
                console.log("登入成功");
                vm.$router.push('/message');
                // if(res.dat.token){
                //     vm.token = res.data.token;
                //     localStorage["token"] = vm.token;
                //     console.log("登入成功");
                // }
                // else{
                //     console.log("登入失敗");
                //     alert(this.message);
                // }
            }).catch(error => {
                vm.message = error.data;
                console.log(error.data);
            });
        }
    }

}
</script>

<style scoped>

.content{
    position: relative;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #f5f5f5;
}

.form-signin {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

.form-signin .form-logo{
    margin: 0 auto;
    display: block;
}
.form-signin .checkbox {
    font-weight: 400;
}
.form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
}
.form-signin .form-control:focus {
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
