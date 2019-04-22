<template>
  <div>
    <div>
      <Header></Header>
    </div>
    <div class="row">
      <VerbBlock class="col" v-bind:title="'直接法 現在'" v-bind:type="0"></VerbBlock>
      <VerbBlock class="col" v-bind:title="'直接法 過去'" v-bind:type="1"></VerbBlock>
      <VerbBlock class="col" v-bind:title="'接続法 現在'" v-bind:type="2"></VerbBlock>
      <VerbBlock class="col" v-bind:title="'接続法 過去'" v-bind:type="3"></VerbBlock>
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
  }
}
</script>

<style scoped>
.verb{
  display: flex;
}
</style>