<template>
    <div class="row d-flex justify-content-center bg-light text-dark" @click="closeResult()">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mx-2">
            <div id="keyword-area" class="form-group col-12">
                <label for="verb-key-word">keyword</label>
                <input id="verb-key-word" class="form-control" type="text" v-model="keyWord" autocomplete="off" placeholder="keyword"
                    v-on:keydown.down.exact="selectDown()"
                    v-on:keydown.up.exact="selectUp()"
                    v-on:keydown.enter.exact="selectWord()"
                    v-on:keydown="onKeyDown()"/>
            </div>
            <div id="result-area" class="position-absolute col-12">
                <ul v-if="hasResult && this.canDisplayResult" class="list-group">
                    <li class="list-group-item p-1" :class="{'bg-dark text-white': index == selectedIndex}" v-for="(res, index) in resultList" :key="index">{{ res.word }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<<script>
export default {
    data: function(){
        return{
            keyWord: '',
            resultList: [],
            selectedIndex: -1
        }
    },
    methods: {
        onKeyDown: function(e){
        },
        closeResult: function(){
            this.$store.dispatch('prohibitDisplaySearchResult')
        },
        selectDown: function(e){
            this.selectedIndex = this.selectedIndex < this.resultList.length - 1 ? this.selectedIndex + 1 : this.selectedIndex
            if(e){
                e.preventDefault()
            }
        },
        selectUp: function(e){
            this.selectedIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : this.selectedIndex
            if(e){
                e.preventDefault()
            }
        },
        selectWord: function(){
            if(this.selectedIndex < 0 || this.selectedIndex >= this.resultList.length){
                return;
            }
            //TODO: 選択した単語を入れたい
            // this.keyWord = this.resultList[this.selectedIndex].word
            this.$store.commit('selectWord', this.resultList[this.selectedIndex].word_id)
            this.$store.dispatch('prohibitDisplaySearchResult')
        }
    },
    computed:{
        hasResult: function(){
            return this.resultList.length > 0;
        },
        canDisplayResult: function(){
            return this.$store.getters.canDisplaySearchResult;
        }
    },
    watch:{
        keyWord: function(val){
            this.resultList = this.$store.getters.search(val)
            this.$store.dispatch('allowDisplaySearchResult')
        }
    }
}
</script>

<style scoped>
li{
    list-style: none;
}

#result-area{
    top: 70px;
}
</style>