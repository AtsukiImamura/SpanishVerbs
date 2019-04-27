<template>
    <div>
        <div id="mobile-menu-btn-wrap" class="justify-content-center align-items-center mt-2 pl-3" :class="{'d-none' : isOpen, 'd-flex' : !isOpen}">
            <img src="/m-menu.svg" alt="openMobileMenu" width="42px" height="42px" @click="openMobileMenu()" />
        </div>
        <div id="mobile-menu" class="position-fixed" :class="{'d-none' : !isOpen}">
            <div class="d-flex justify-content-end">
                <img src="/m-close.svg" width="42px" height="42px" class=" m-2" value=" Close " @click="closeMobileMenu()"></input>
            </div>
            <div>
                <div id="m-user-info" class="row w-100"  :class="{'d-none': !userAuthenticated}">
                    <div class="col-2 pl-3 ml-2">
                        <img alt="user-profile-photo" :src="userPhotoURL" />
                    </div>
                    <div class="col-9">
                        <span>{{ userDispName }}</span>
                    </div>
                </div>
                <div id="m-logout" class="justify-content-center m-action py-2 my-2" :class="{'d-none': !userAuthenticated, 'd-flex': userAuthenticated}" @click="logout()">
                    <span>Logout</span>
                </div>
                <div id="m-login" class="justify-content-center m-action py-2 my-2" :class="{'d-none':userAuthenticated, 'd-flex': !userAuthenticated}" @click="login()">
                    <span>Login</span>
                </div>
            </div>
        </div>
    </div>
</template>

<<script>
export default {
    data: function(){
        return {
            user: null,
            isOpen: false
        }
    },
    computed: {
        userAuthenticated(){
            // 直接取得するとなぜか循環参照になってしまうので、userAuthenticatedで逐一判断することにした
            this.user = this.$store.state.user
            return this.$store.state.authenticated
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
            this.$store.dispatch('loginWithGoogle');
        },
        logout(){
            this.$store.dispatch('logout');
        },
        openMobileMenu(){
            console.log('open!')
            this.isOpen = true
        },
        closeMobileMenu(){
            console.log('close!')
            this.isOpen = false
        }
    }
}
</script>

<style lang="scss" scoped>
#mobile-menu-btn-wrap{
    img{
        width: 48px;
        height: 48px;
        border: 3px solid #b8b8b8;
        border-radius: 3px;
        background-color: #f8f8f8;
        padding: 4px;
    }
}
#m-user-info{

    img{
        width: 48px;
    }
}
.m-action{
    width: 100%;
    background-color: rgba(0,0,80, 0.8);
    color: #ffffff;
}
#m-open-menu-btn{
    width: 42px;
    height: 42px;
    background-color: #808080;
    border-radius: 3px;
}

#mobile-menu{
    width: 85vw;
    height: 100vh;
    left: 15vw;
    top: 0px;
    z-index: 999;
    /* background-color: rgba(180, 180, 180); */
    background-color: rgb(240, 240, 240);
}
</style>