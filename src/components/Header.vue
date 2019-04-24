<template>
    <div class="row bg-light text-dark w-100 ml-0">
        <div class="col-xl-7 col-lg-6 col-md-8 col-sm-10 col-10 offset-xl-2 offset-lg-3 p-sm-1 p-1">
            <SearchBox class="row d-flex justify-content-center bg-light text-dark"></SearchBox>
        </div>
        <UserInfoBox class="col-xl-3 col-lg-3 col-md-4 d-none d-md-flex"></UserInfoBox>
        <MobileMenu class="col-2 col-sm-2 p-1 d-block d-sm-none d-md-none d-lg-none d-xl-none"></MobileMenu>
    </div>
</template>

<script>

import SearchBox from './SearchBox.vue';
import UserInfoBox from './UserInfoBox.vue';
import MobileMenu from './MobileMenu.vue';

export default {
    components:{
        SearchBox,UserInfoBox,MobileMenu
    },
}
</script>