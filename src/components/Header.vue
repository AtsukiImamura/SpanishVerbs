<template>
    <div class="row bg-light text-dark w-100">
        <div class="col-xl-7 col-lg-6 col-md-8 offset-xl-2 offset-lg-3">
            <SearchBox class="row d-flex justify-content-center bg-light text-dark"></SearchBox>
        </div>
        <UserInfoBox class="col-xl-3 col-lg-3 col-md-4 d-none d-md-flex"></UserInfoBox>
    </div>
</template>

<script>

import SearchBox from './SearchBox.vue';
import UserInfoBox from './UserInfoBox.vue';

export default {
    components:{
        SearchBox,UserInfoBox
    },
}
</script>