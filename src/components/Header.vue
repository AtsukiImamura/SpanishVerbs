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
                <div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 d-sm-block d-none">
                    <Title></Title>
                </div>
                <div class="col-xl-5 offset-xl-1 col-lg-6 col-md-5 col-sm-9 col-11 p-sm-1 p-1">
                    <SearchBox class="row d-flex justify-content-center bg-light text-dark"></SearchBox>
                </div>
                <UserInfoBox class="col-xl-2 col-lg-3 col-md-2 col-sm-3 d-none d-sm-flex"></UserInfoBox>
            </div>
        </div>
    </div>
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