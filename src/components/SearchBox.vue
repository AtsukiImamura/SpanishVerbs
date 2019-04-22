<template>
    <div class="row d-flex justify-content-center bg-light text-dark w-100" @click="closeResult()">
        <div class="col-3">
            <div id="keyword-area" class="form-group col-12">
                <label for="verb-key-word">keyword</label>
                <input id="verb-key-word" class="form-control" type="text" v-model="keyWord" v-on:keydown.down.exact="selectDown()" v-on:keydown.up.exact="selectUp()" v-on:keydown.enter.exact="selectWord()"/>
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
            this.$store.commit('selectWord', this.resultList[this.selectedIndex].word_id)
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