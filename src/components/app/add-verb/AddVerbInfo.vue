<template>
    <div>
        <div class="mt-5 mb-5">
        </div>
        <div class="card m-2">
            <div class="card-body">
                <h5 class="card-title">動詞の追加</h5>
                <p class="card-text">足りない動詞があれば、動詞を追加しましょう！　追加後、数日で反映されます。</p>
                <router-link to="/addVerb"><input type="button" class="btn btn-primary" value="動詞を追加" /></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import store from "../../../stores/AddVerbStore.js"
export default {

}
</script>