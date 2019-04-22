<template>
    <div class="card" :class="{'is-hidden': wordList.length == 0}">
        <h5 class="card-header">{{ title }}</h5>
        <div class="card-body">
            <ul class="list-group">
                <li v-for="(w, index) in wordList" class="list-group-item">{{ w.word }}</li>
            </ul>
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
            return this.$store.getters.getByWordIdAndType({
                id: this.selectedWordId,
                type: this.type
            })
        }
    }
}
</script>