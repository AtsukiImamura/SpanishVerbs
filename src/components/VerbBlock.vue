<template>
    <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pl-1 pr-1 mt-md-3 mt-2" :class="{'d-none': wordList.length == 0}">
        <div class="card" :class="{'is-hidden': wordList.length == 0}">
            <h5 class="card-header" :class="this.colorClass">{{ title }}</h5>
            <div class="card-body pl-1 pt-0 pb-0">
                <div v-for="(w, index) in wordList" class="mt-2 mb-2 d-flex" :class="{'border-top': index > 0}">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-3 col-3 px-xl-2">{{ w.person_disp }}</div>
                    <div class="col-xl-9 col-lg-9 px-xl-2">{{ w.word }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'type','colorClass'],
    data: function(){
        return{
        }
    },
    computed: {
        selectedWordId: function(){
            return this.$store.state.selectedWordId
        },
        wordList: function(){
            return this.$store.state.selectedWordList.filter(v => v.type == this.type)
        }
    }
}
</script>

<style scoped>
.color-indicative{
    background-color: #b02000;
    color: #ffffff;
}

.color-fictive{
    background-color: #107800;
    color: #ffffff;
}

.color-imperative{
    background-color: #808080;
    color: #ffffff;
}
</style>