<template>
    <div class="bg-light text-dark w-100 ml-0 d-flex justify-content-center">
        <div class="col-xl-10 col-12 offset-xl-1 px-1">
            <div class="row w-100 mx-0">
                <div class="d-block d-sm-none w-100">
                    <div class="row">
                        <Title class="col-9 offset-1 m-0"></Title>
                        <MobileMenu class="col-3 pr-4"></MobileMenu>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-4 col-sm-12 d-sm-block d-none ">
                    <Title></Title>
                </div>
                <div class="col-xl-5 offset-xl-1 col-lg-6 col-md-5 col-sm-8 col-11 px-sm-1 p-1 pl-2">
                    <SearchBox class="row d-flex justify-content-center bg-light text-dark"></SearchBox>
                </div>
                <UserInfoBox class="col-xl-2 col-lg-2 col-md-3 col-sm-4 d-none d-sm-flex px-1"></UserInfoBox>
            </div>
        </div>
    </div>
</template>

<script>

import SearchBox from './verbs/SearchBox.vue'
import UserInfoBox from './UserInfoBox.vue'
import MobileMenu from './MobileMenu.vue'
import Title from './Title.vue'

export default {
    components:{
        // SearchBox: () => import(/* webpackChunkName: "search-box" */'./SearchBox.vue'),
        // UserInfoBox: () => import(/* webpackChunkName: "user-info-box" */'./UserInfoBox.vue'),
        // MobileMenu: () => import(/* webpackChunkName: "mobile-menu" */'./MobileMenu.vue'),
        // Title: () => import(/* webpackChunkName: "title" */'./Title.vue')
        SearchBox, UserInfoBox, MobileMenu, Title
    },
}
</script>