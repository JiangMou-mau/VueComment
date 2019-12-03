<template>
  <div>
        <div class="u-margin-bottom-small" >
            <h1 class="heading">留言板</h1>
            <h2 class="heading--sub">歡迎來到留言版</h2>
            
            
        </div>
        <div>
        <form class="left" @submit.prevent="leaveMessage">
            <h1 class="h3 mb-4 heading-primary">留言</h1>
            <div class="form__group">
                <label class="form__label">標題</label>
                <input v-model="newTitle" type="text" class="form__input" placeholder="請輸入標題" id="title" required>
    
            </div>
            <div class="form__group">
                <label class="form__label">留言</label>
                <textarea type="text" class="form-control" id="content" v-model="newContent" placeholder="請輸入備註" required></textarea>
            </div>

            <button class="btn btn-lg btn-primary btn-block" type="submit">留言</button>
            
    
        </form>
        </div>
        <div class="content-card">
            
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">姓名</th>
                        <th scope="col">標題</th>
                        <th scope="col">內容</th>
                        <th scope="col">管理</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="comment in comments" :key="comment.cid">
                        <td>{{ comment.name }}</td>
                        <td>{{ comment.title}}</td>
                        <td>{{ comment.content }}</td>
                        
                        <td>
                            <td class="btn-group" role="group">
                            <router-link v-if="comment.cfid == userData.fid" class="btn btn-outline-primary btn-md" :to="{ name: 'MessageEdit', params: { id: comment.cid } }">編輯</router-link>
                            <button v-if="comment.cfid == userData.fid" type="button" class="btn btn-outline-danger btn-md" @click="deleteComment(comment.cid) ">刪除</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div> 
   
    
  </div>
</template>

<script>

export default {
    data(){
        return{
            newTitle: "",
            newContent: "",
            userData: null,
            comments: [],
        }
    },
    mounted(){
        this.getUserData();
    },
    methods:{
        getUserData(){
            const api = `/api/getUserData`;
            console.log(api);
            const vm = this;
            vm.$http.get(api,{ headers: { 'Authorization':'bearer'+ localStorage['token'] } }).then((res) => {
                vm.userData = res.data;
                vm.getMessage();
            }).catch(error => {
                // vm.message = error.data;
                console.log(error.data);
            });
        },
        getMessage(){
            const api = `/api/showComment`;
            console.log(api);
            const vm = this;
            vm.$http.get(api,{ headers: { 'Authorization':'bearer'+ localStorage['token'] } }).then((res) => {
                vm.comments = res.data;
                
            }).catch(error => {
                // vm.message = error.data;
                console.log(error.data);
            });
        },
        leaveMessage(){
            const api = `/api/comment`;
            const vm = this;
            const data = {
                title: this.newTitle,
                content: this.newContent
            }
            console.log(api);
            vm.$http.post(api, data, { headers: { 'Authorization':'bearer'+ localStorage['token'] } }).then((res) => {
                vm.comments.splice(0, 0, res.data);
                vm.newTitle = "";
                vm.newContent = "";
            }).catch(error => {
                // vm.message = error.data;
                console.log(error.data);
            });

        },
        deleteComment(delCid){
            const api = `/api/deleteComment?cid=`+delCid;
            const vm = this;
            const data = {
                title: this.newTitle,
                content: this.newContent
            }
            console.log(api);
            vm.$http.delete(api, { headers: { 'Authorization':'bearer'+ localStorage['token'] } }).then((res) => {
                 alert(res.data);
            }).catch(error => {
                // vm.message = error.data;
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
