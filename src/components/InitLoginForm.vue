<template>
    <div class="position-fixed w-100 h-100">
        <div id="init-login-form" class="w-100 h-100">
            <div class="d-flex justify-content-center w-100 row ml-1 mr-0">
                <div class="col-xl-4 col-lg-6 col-md-7 col-sm-10 col-11 bg-white px-2 py-4 mt-5 rounded">
                    <div class="d-flex justify-content-center p-2">
                        <span>検索するにはGoogleでログインしてください</span>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <input type="button" class="btn btn-danger" value="     Login with Google    "  @click="login()" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainStore from '../stores/MainStore.js'

export default {
    methods: {
        login(){
            MainStore.dispatch('loginWithGoogle');
        }
    }
}
</script>

<style lang="scss" scoped>
#init-login-form{
    background-color: rgba(180,180,180, 0.8);
    top: 100px;
    left: 0px;
}
</style>
