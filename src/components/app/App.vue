<template>
  <div id="main" @click="hideSearchResults()">
    <Header id="app-header" class="position-fixed" :can-search="true"></Header>
    <Header></Header>
    <div id="main-contents" class="mt-3 d-flex flex-column justify-content-center">
      <Verbs></Verbs>
      <InitLoginForm :class="{'d-none': isAuthenticated}"></InitLoginForm>
      <AddVerbInfo class="col-10 offset-1" :class="{'d-none': !isAuthenticated}"></AddVerbInfo>
    </div>
  </div>
</template>

<script>
import MainStore from '../../stores/MainStore.js'
import Header from './Header.vue'
import InitLoginForm from './InitLoginForm.vue'
import AddVerbInfo from "./add-verb/AddVerbInfo.vue"
import Verbs from './verbs/Verbs.vue'

export default {
  components: {
    InitLoginForm, Header, AddVerbInfo, Verbs
  },
  mounted: function(){
    MainStore.dispatch("init")
  },
  computed: {
    isAuthenticated(){
      return MainStore.state.authenticated
    }
  },
  methods: {
    hideSearchResults(){
      MainStore.dispatch('prohibitDisplaySearchResult')
    }
  }
}
</script>

<style lang="scss" scoped>
.verb{
  display: flex;
}
#app-header{
  z-index: 100;
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