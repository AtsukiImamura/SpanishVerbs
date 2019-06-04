<template>
    <div @click="closeResult()">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mx-2 pr-1 pl-1">
            <div id="keyword-area" class="form-group col-12 p-sm-2 p-1 my-2">
                <label for="verb-key-word" class="d-none">keyword {{ this.test }}</label>
                <input id="verb-key-word" class="form-control" type="text" v-model="keyWord" autocomplete="off" placeholder="keyword"
                    v-on:keydown.down.exact="selectDown()"
                    v-on:keydown.up.exact="selectUp()"
                    v-on:keydown.enter.exact="selectWord()"
                    v-on:keydown="onKeyDown()"/>
            </div>
            <div id="result-area" class="position-absolute col-12 px-3">
                <ul v-if="hasResult && this.canDisplayResult" class="list-group">
                    <li class="list-group-item p-1" :class="{'bg-dark text-white': index == selectedIndex}" v-for="(res, index) in resultList" :key="index" @touch="directSelectWord(index)" @click="directSelectWord(index)" >{{ res.word }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import MainStore from '../../../stores/MainStore.js'

export default {
    data: function(){
        return{
            keyWord: '',
            selectedIndex: -1
        }
    },
    methods: {
        onKeyDown: function(e){
        },
        /** 候補リストを非表示にする */
        closeResult: function(){
            MainStore.dispatch('prohibitDisplaySearchResult')
        },
        /** 候補の中の現在の選択位置を下に一つ下げる */
        selectDown: function(e){
            this.selectedIndex = this.selectedIndex < this.resultList.length - 1 ? this.selectedIndex + 1 : this.selectedIndex
            if(e){
                e.preventDefault()
            }
        },
        /** 候補の中の現在の選択位置を上に一つ上げる */
        selectUp: function(e){
            this.selectedIndex = this.selectedIndex > 0 ? this.selectedIndex - 1 : this.selectedIndex
            if(e){
                e.preventDefault()
            }
        },
        /** 現在の選択位置に基づいて単語を選択する */
        selectWord: function(){
            if(this.selectedIndex < 0 || this.selectedIndex >= this.resultList.length){
                return;
            }
            //TODO: 選択した単語を入れたい
            MainStore.dispatch('selectWord', this.resultList[this.selectedIndex])
            MainStore.dispatch('prohibitDisplaySearchResult')
            this.selectedIndex = -1
        },
        /** クリック・タッチなどで選択した場合 */
        directSelectWord: function(index){
            this.selectedIndex = index
            this.selectWord()
        }
    },
    computed:{
        hasResult: function(){
            return this.resultList.length > 0;
        },
        canDisplayResult: function(){
            return MainStore.getters.canDisplaySearchResult;
        },
        test(){
            return MainStore.state.test
        },
        resultList(){
            return MainStore.state.searchVerbs
        }
    },
    watch:{
        /** 入力されたキーワードを監視して、変化があったときに候補リストを更新する */
        keyWord: function(val){
            MainStore.dispatch('search', val)
            MainStore.dispatch('allowDisplaySearchResult')
        }
    }
}
</script>

<style scoped>
li{
    list-style: none;
}

#result-area{
    top: 55px;
    left: 1%;
}
</style>