<template>
    <!--<div>
        <div class="d-none">
            <Title></Title>
        </div>-->
        <div class="row bg-light text-dark w-100 ml-0">
            <div class="d-block d-sm-none w-100">
                <div class="row">
                    <Title class="col-6 offset-1"></Title>
                    <MobileMenu class="col-3 offset-2"></MobileMenu>
                </div>
            </div>
            <div class="col-xl-2 offset-xl-1 col-lg-3 col-md-4 d-md-block d-none">
                <Title></Title>
            </div>
            <div class="col-xl-4 offset-xl-1 col-lg-6 col-md-5 col-sm-9 col-11 p-sm-1 p-1">
                <SearchBox class="row d-flex justify-content-center bg-light text-dark"></SearchBox>
            </div>
            <UserInfoBox class="col-xl-2 col-lg-3 col-md-3 col-sm-3 d-none d-sm-flex"></UserInfoBox>
        </div>
    <!--</div>-->
</template>

<script>

import SearchBox from './SearchBox.vue';
import UserInfoBox from './UserInfoBox.vue';
import MobileMenu from './MobileMenu.vue';
import Title from './Title.vue';

export default {
    components:{
        SearchBox, UserInfoBox, MobileMenu, Title
    },
}
</script>