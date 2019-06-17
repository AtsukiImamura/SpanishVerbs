<template>
  <!-- <div class="row py-1">
    <div class="col-4 text-secondary">
      <span>{{ title }}</span>
    </div>
    <div class="col-8">
      <input
        :id="'verb-in-index-'+mood+'-'+person"
        class="form-control"
        :class="{'d-none': !isEditting}"
        type="text"
        v-model="word"
      >
      <span :class="{'d-none': isEditting}" v-model="word"></span>
    </div>
  </div>-->
  <!-- <div class="form-group">
    <label :for="'verb-input-'+mood+'-'+person">{{ title }}</label>
  </div>-->
  <div class="pt-2 pb-1">
    <label :for="'verb-input-'+mood+'-'+person" class="title text-muted mb-0">{{ title }}</label>
    <input
      v-model="word"
      type="text"
      :id="'verb-input-'+mood+'-'+person"
      class="form-control form-control-sm"
      :class="{'d-none': !isEditting}"
    >
    <span class="px-3" :class="{'d-none': isEditting}">{{ word }}</span>
  </div>
</template>

<script>
import store from "../../../stores/AddVerbStore.js";
export default {
  props: ["title", "mood", "person"],
  data: function() {
    return {
      word: ""
    };
  },
  computed: {
    isEditting() {
      return store.state.isEditting;
    }
  },
  watch: {
    word(text) {
      store.dispatch("addWord", {
        mood: this.mood,
        person: this.person,
        text: this.word
      });
    }
  }
};
</script>

<style  scoped>
.title {
  font-size: 0.8em;
}
</style>
