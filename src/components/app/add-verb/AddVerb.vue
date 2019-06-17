<template>
  <div id="main">
    <Header id="app-header" class="position-fixed" :can-search="false"></Header>
    <Header></Header>
    <div id="main-contents" class="d-flex flex-column justify-content-center">
      <div id="title" class="my-3 px-lg-4 px-md-2 px-1">
        <h1>動詞を追加</h1>
      </div>
      <VerbInputTop></VerbInputTop>
      <div class="row">
        <div
          v-for="(moodInfo, mood) in moodInfoList"
          :key="mood"
          class="py-3 px-lg-4 px-md-2 px-0 col-lg-6 col-md-12 col-12"
        >
          <h5 class="text-info">{{ moodInfo.name }}</h5>
          <div>
            <VerbInput :mood="mood" person="0" title="１人称・単数"></VerbInput>
            <VerbInput :mood="mood" person="3" title="１人称・複数"></VerbInput>
            <VerbInput :mood="mood" person="1" title="２人称・単数"></VerbInput>
            <VerbInput :mood="mood" person="4" title="２人称・複数"></VerbInput>
            <VerbInput :mood="mood" person="2" title="３人称・単数"></VerbInput>
            <VerbInput :mood="mood" person="5" title="３人称・複数"></VerbInput>
          </div>
        </div>
      </div>
      <div id="user-ctrl-area">
        <div class="row">
          <div class="col-8"></div>
          <div class="col-2" :class="{'d-none': !isEditting}">
            <router-link to="/">
              <input type="button" class="btn btn-secondary" value="キャンセル">
            </router-link>
          </div>
          <div class="col-2" :class="{'d-none': !isEditting}">
            <input type="button" class="btn btn-success" @click="confirm()" value="確認">
          </div>
          <div class="col-2" :class="{'d-none': isEditting}">
            <input type="button" class="btn btn-secondary" @click="back()" value="戻る">
          </div>
          <div class="col-2" :class="{'d-none': isEditting}">
            <input type="button" class="btn btn-success" @click="submit()" value="OK">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../../stores/AddVerbStore.js";
import VerbInputTop from "./VerbInputTop.vue";
import VerbInput from "./VerbInput.vue";
import Header from "../Header.vue";

export default {
  components: {
    VerbInputTop,
    VerbInput,
    Header
  },
  data: function() {
    return {
      moodInfoList: [
        { name: "直説法現在" },
        { name: "直説法過去" },
        { name: "直説法線過去" },
        { name: "直説法未来" },
        { name: "直説法過去未来" },
        { name: "命令法" },
        { name: "接続法現在" },
        { name: "接続法過去" }
      ]
    };
  },
  computed: {
    isEditting() {
      return store.state.isEditting;
    }
  },
  methods: {
    back() {
      store.dispatch("back");
    },
    submit() {
      store.dispatch("submitWord");
      store.dispatch("clear");
      this.$router.push("/");
    },
    confirm() {
      store.dispatch("confirm");
    }
  }
};
</script>

<style lang="scss" scoped>
.verb {
  display: flex;
}
#app-header {
  z-index: 100;
}
@media screen and (min-width: 1075px) {
  #main-contents {
    width: 1075px;
    margin: auto;
    background-color: #ffffff;
  }
  #main {
    /* background-color: #fcfcfc; */
  }
}
#main {
  min-height: 80vh;
}
#title {
  color: #808080;
  border-bottom: 3px solid #d8d8d8;
}
.plural-form {
  background-color: #f8c9c9;
}

.singlar-form {
  background-color: #ffe7d6;
}
</style>