<template>
    <div>
        <div id="filter_area" class="my-3">
            <div class="rounded bg-light px-2 py-4">
                <div class="row">
                    <div class="col-4">
                        <label for="user-log-key-word" class="text-info">keyword</label>
                        <input id="user-log-key-word" class="form-control" type="text" autocomplete="off" placeholder="keyword" />
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-4">
            <div class="row">
                <div class="pb-2 border-bottom col-xl-3 col-lg-4"><span>uid</span></div>
                <div class="pb-2 border-bottom col-xl-1 col-lg-1"><span>id</span></div>
                <div class="pb-2 border-bottom col-xl-1 col-lg-1"><span>type</span></div>
                <div class="pb-2 border-bottom col-xl-1 col-lg-1"><span>person</span></div>
                <div class="pb-2 border-bottom col-xl-2 col-lg-3"><span>word</span></div>
                <div class="pb-2 border-bottom col-xl-2 col-lg-2"><span>created at</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import LogStore from '../stores/LogStore.js'

export default {
    data: function(){
        return {
        }
    },
    methods: {
        
    },
    computed: {
        users(){
            return LogStore.state.users
        }
    }
}
</script>