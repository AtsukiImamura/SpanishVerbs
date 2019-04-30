<template>
  <div id="main" @click="hideSearchResults()">
    <Header id="app-header" class="position-fixed"></Header>
    <Header></Header>
    <div id="main-contents" class="d-flex justify-content-center">
      <div class="mt-0 pt-3 mx-xl-2 mx-lg-3 mx-md-2 mx-sm-2 ml-1 mr-2 px-2">
        <router-link to="/admin" class="d-none">Admin</router-link>
        <div class="row" :class="{'d-none':this.selectWord(0) === ''}">
          <h3 class="col-md-3 col-lg-2 col-12">{{ this.selectWord(0) }}</h3>
          <div class="col-md-3 col-lg-2 col-6">
            <span class=""><small>現在分詞</small></span>
            <h5>{{ this.selectWord(1) }}</h5>
          </div>
          <div class="col-md-3 col-lg-2 col-6">
            <span><small>過去分詞</small></span>
            <h5>{{ this.selectWord(2) }}</h5>
          </div>
        </div>
        <div class="row">
          <VerbBlock class="col" v-bind:title="'直接法 現在'" v-bind:type="0" color-class="color-indicative"></VerbBlock>
          <VerbBlock class="col" v-bind:title="'直接法 点過去'" v-bind:type="1" color-class="color-indicative"></VerbBlock>
          <VerbBlock class="col" v-bind:title="'直接法 線過去'" v-bind:type="2" color-class="color-indicative"></VerbBlock>
          <VerbBlock class="col" v-bind:title="'直接法 未来'" v-bind:type="3" color-class="color-indicative"></VerbBlock>
          <VerbBlock class="col" v-bind:title="'直接法 過去未来'" v-bind:type="4" color-class="color-indicative"></VerbBlock>
          <VerbBlock class="col" v-bind:title="'命令法'" v-bind:type="5" color-class="color-imperative"></VerbBlock>
          <VerbBlock class="col" v-bind:title="'接続法 現在'" v-bind:type="6" color-class="color-fictive"></VerbBlock>
          <VerbBlock class="col" v-bind:title="'接続法 過去'" v-bind:type="7" color-class="color-fictive"></VerbBlock>
        </div>
      </div>
      <InitLoginForm :class="{'d-none': isAuthenticated}"></InitLoginForm>
    </div>
  </div>
</template>

<script>
import MainStore from '../stores/MainStore.js'
import Header from './Header.vue'
import VerbBlock from './VerbBlock.vue'
import InitLoginForm from './InitLoginForm.vue'

export default {
  components: {
    InitLoginForm, VerbBlock, Header
  },
  mounted: function(){
    MainStore.dispatch("init")
  },
  computed: {
    selectedWordHeader: function(){
      return MainStore.state.selectedVerbList.filter(v => v.type == 10)
    },
    isAuthenticated(){
      return MainStore.state.authenticated
    }
  },
  methods: {
    hideSearchResults(){
      MainStore.dispatch('prohibitDisplaySearchResult')
    },
    selectWord(person){
      let words = this.selectedWordHeader.filter(v => v.person == person)
      if(words.length == 0){
        return ""
      }
      return words[0].word
    }
  }
}
</script>

<style lang="scss" scoped>
.verb{
  display: flex;
}
#app-header{
  z-index: 999;
}
@media screen and (min-width:1075px) { 
  #main-contents{
    width: 1075px;
    margin: auto;
    background-color: #ffffff;
  }
  #main{
    /* background-color: #fcfcfc; */
  }
}
#main{
  min-height: 80vh;
}
</style>