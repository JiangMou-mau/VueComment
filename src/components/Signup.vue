<template>
  <div class="content">
    <form class="form-signin text-center" @submit.prevent="Signup">
        <!-- <img class="form-logo mb-4" src="https://thememakker.com/wrap-theme/compass/hospital/assets/images/logo.svg" alt="" width="72" height="72"> -->
        <h1 class="h3 mb-4 heading-primary">帳戶註冊</h1>
        
        <div class="form__group"> 
            <label for="account" class="form__label">帳號</label>
            <input v-model="follower.faccount" type="text" class="form__input" placeholder="請輸入帳號" id="faccount" required>
           
        </div>
        <div class="form__group">
            <label for="password" class="form__label">密碼</label>
            <input v-model="follower.pwd" type="password" class="form__input" placeholder="請輸入密碼" id="pwd" required>
            
        </div>
        <div class="form__group">
            <label for="name" class="form__label">姓名</label>
            <input v-model="follower.name" type="text" class="form__input" placeholder="請輸入姓名" id="name" required>
            
        </div>
        <div class="form__group">
            <label for="address" class="form__label">地址</label>
            <input v-model="follower.address" type="text" class="form__input" placeholder="請輸入地址" id="address" required>
            
        </div>
        <div class="form__group">
            <label for="mphone" class="form__label">註冊</label>
            <input v-model="follower.mphone" type="text" class="form__input" placeholder="請輸入電話" id="mphone" required>
            
        </div>
        <div class="checkbox mb-3" style="float: left" v-if="!message == ''">
            <label class="login-msg danger">{{ message }}</label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">註冊</button>
        <router-link class="btn btn-outline-primary btn-md" :to="{ name: 'Login'}">登入</router-link>
        <p class="mt-5 mb-3 text-muted">php作業</p>
    </form>
    
  </div>
</template>

<script>

export default {
    name: 'Signup',
    data(){
        return{
            follower: {
                faccount: "",
                pwd: "",
                name:"",
                address:"",
                mphone:""

            },
            message: "",
            token: "",
            serverUrl: "http://localhost/api/"
        }
    },
    methods:{
        Signup(){
            const api = `${this.serverUrl}signUp`;
            console.log(api);
            const vm = this;
            vm.$http.post(api, vm.follower).then((res) => {
                console.log(res.data);
                alert(res.data);
                this.$store.dispatch('loginModule/login', this.follower);
                
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
