<template>
  <div id="main" @click="hideSearchResults()">
    <Header id="app-header" class="position-fixed"></Header>
    <Header></Header>
    <div id="main-contents">
      <div>
        <!-- 見出し表示エリア -->
      </div>
      <div class="row mt-0 pt-3 mx-xl-2 mx-lg-3 mx-md-2 mx-sm-2 mx-1">
        <VerbBlock class="col" v-bind:title="'直接法 現在'" v-bind:type="0"></VerbBlock>
        <VerbBlock class="col" v-bind:title="'直接法 点過去'" v-bind:type="1"></VerbBlock>
        <VerbBlock class="col" v-bind:title="'直接法 線過去'" v-bind:type="2"></VerbBlock>
        <VerbBlock class="col" v-bind:title="'直接法 未来'" v-bind:type="3"></VerbBlock>
        <VerbBlock class="col" v-bind:title="'直接法 過去未来'" v-bind:type="4"></VerbBlock>
        <VerbBlock class="col" v-bind:title="'命令法'" v-bind:type="5"></VerbBlock>
        <VerbBlock class="col" v-bind:title="'接続法 現在'" v-bind:type="6"></VerbBlock>
        <VerbBlock class="col" v-bind:title="'接続法 過去'" v-bind:type="7"></VerbBlock>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import VerbBlock from './VerbBlock.vue'
export default {
  components: {
    Header,VerbBlock
  },
  mounted: function(){
    this.$store.dispatch("initVerbs")
  },
  computed: {
    verbList: function(){
      return this.$store.state.verbs;
    }
  },
  methods: {
    hideSearchResults(){
      this.$store.dispatch('prohibitDisplaySearchResult')
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