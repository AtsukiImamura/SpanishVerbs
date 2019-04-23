<template>
    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 pl-1 pr-1 mt-md-3 mt-2" :class="{'d-none': wordList.length == 0}">
        <div class="card" :class="{'is-hidden': wordList.length == 0}">
            <h5 class="card-header">{{ title }}</h5>
            <div class="card-body pl-3 pt-0 pb-0">
                <div v-for="(w, index) in wordList" class="mt-2 mb-2 d-flex" :class="{'border-top': index > 0}">
                    <div class="col-2 pr-2">{{ w.person_disp }}</div>
                    <div class="col-10">{{ w.word }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<<script>
export default {
    props: ['title', 'type'],
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