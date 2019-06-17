<template>
  <div>
    <h5 class="text-info">原形・現在分詞・過去分詞</h5>
    <div class="row">
      <div class="col form-group">
        <label for="verb-in-1-1">原形</label>
        <input id="verb-in-1-1" class="form-control" :class="{'d-none': !isEditting}" type="text">
        <span class="px-3" :class="{'d-none': isEditting}"></span>
      </div>
      <div class="col form-group">
        <label for="verb-in-1-1">現在分詞</label>
        <input id="verb-in-1-1" class="form-control" :class="{'d-none': !isEditting}" type="text">
        <span class="px-3" :class="{'d-none': isEditting}"></span>
      </div>
      <div class="col form-group" @click="confirm()">
        <label for="verb-in-1-1">過去分詞</label>
        <input id="verb-in-1-1" class="form-control" :class="{'d-none': !isEditting}" type="text">
        <span class="px-3" :class="{'d-none': isEditting}"></span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../../stores/AddVerbStore.js";

export default {
  components: {},
  data: function() {
    return {
      words: {
        0: {
          index: 0,
          text: ""
        },
        1: {
          index: 1,
          text: ""
        },
        2: {
          index: 2,
          text: ""
        }
      }
    };
  },
  computed: {
    isEditting() {
      console.log("=========");
      console.log(this.words);
      return store.state.isEditting;
    }
  },
  methods: {
    confirm() {
      console.log("=========");
      console.log(this.words);
    }
  }
  /*
    watch: {
    words(wordInfo) {
      store.dispatch("addWord", {
        mood: 0,
        person: wordInfo.index,
        text: wordInfo.text
      });
    }
  }
  */
};
</script>