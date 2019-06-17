import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addingWords: {},
    isEditting: true
  },
  mutations: {
    addWord(state, payload) {
      state.addingWords[payload.mood + "-" + payload.person] = payload;
    },
    setEditing(state, value) {
      state.isEditting = value;
    },
    clearVerbList(state) {
      state.addingWords = {};
    }
  },
  getters: {
    // isModalOpen(state) {
    //   return state.isModalOpen;
    // }
  },
  actions: {
    addWord(context, payload) {
      context.commit("addWord", payload);
    },
    confirm(context) {
      context.commit("setEditing", false);
    },
    back(context) {
      context.commit("setEditing", true);
    },
    submitWord(context) {
      // firebase
      //   .database()
      //   .ref("verbs")
      //   .add(addingWords); // TODO
      console.log(context.state.addingWords);
    },
    clear(context) {
      context.commit("setEditing", false);
      context.commit("clearVerbList");
    }
  }
});
