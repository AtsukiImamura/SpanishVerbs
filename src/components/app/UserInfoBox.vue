<template>
    <div class="align-items-center justify-content-end">
        <div id="user-info" class="py-1 px-2 mx-2" :class="{'d-none': !this.userAuthenticated, 'd-flex': this.userAuthenticated}">
            <div id="user-photo" class="d-flex align-items-center mr-2">
                <img alt="user-profile-photo" :src="userPhotoURL" />
            </div>
            <div class="d-flex align-items-center mb-2">
                <span class="d-none">{{ userDispName }}</span>
                <input id="logout-btn" type="button" class="mx-1 mt-1 btn" value="Logout" @click="logout()" />
            </div>
        </div>
        <div id="login-area" :class="{'d-none': this.userAuthenticated}">
            <input type="button" class="btn btn-danger" value="     Login     " @click="login()" />
        </div> 
    </div>
</template>


<script>
import MainStore from '../../stores/MainStore.js'

export default {
    data: function(){
        return {
            user: null
        }
    },
    computed: {
        userAuthenticated(){
            // 直接取得するとなぜか循環参照になってしまうので、authenticatedで逐一判断することにした
            this.user = MainStore.state.user
            return MainStore.state.authenticated
        },
        userDispName(){
            return this.user ? this.user.displayName : ''
        },
        userPhotoURL(){
            return this.user ? this.user.photoURL : ''
        }
    },
    methods: {
        login(){
            MainStore.dispatch('loginWithGoogle');
        },
        logout(){
            MainStore.dispatch('logout');
        }
    }
}
</script>

<style lang="scss" scoped>
#login-area{
}

#user-info{
    /* border: 1px solid #ffffff;
    background-color: #f5f5fb; */
}

$userPhotoSize: 42px;
#user-photo img{
    padding: 0px;
    height: $userPhotoSize;
    width: $userPhotoSize;
    border-radius: $userPhotoSize;
    border: solid 2px #d8d8d8;
}

#logout-btn{
    border-color: #c0c0c0;
    color: #787888;
    &:hover{
        background-color: #d8d8e8;
        color: #ffffff
    }
}
</style>