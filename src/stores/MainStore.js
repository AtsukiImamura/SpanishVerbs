import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VERB_RESULT_NUM = 15;

export default new Vuex.Store({
    state: {
        count: 0,
        verbs: [],
        canDisplaySearchResult: true,
        selectedWordId: ''
    },
    mutations: {
        increment(state){
            state.count ++;
        },
        /* 動詞リストを初期化する */
        initVerbs(state, list){
            state.verbs = list
        },

        allowDisplaySearchResult(state){
            state.canDisplaySearchResult = true
        },
        prohibitDisplaySearchResult(state){
            state.canDisplaySearchResult = false
        },
        selectWord(state, id){
            state.selectedWordId = id
        }
    },
    getters: {
        /* 単語を検索 */
        search: (state) => (keyword) => {
            // 先頭にマッチするもの
            let startWith = state.verbs.filter(v => v.word.startsWith(keyword))
            if(startWith.length > VERB_RESULT_NUM){
                return startWith.slice(0, VERB_RESULT_NUM)
            }

            // 先頭マッチが少ない時は途中に含むものも混ぜる
            let includes = state.verbs.filter(v => v.word.includes(keyword));
            return startWith.concat(includes.slice(0, VERB_RESULT_NUM - startWith.length))
        },
        canDisplaySearchResult: (state) => state.canDisplaySearchResult,
        getByWordIdAndType: (state) => (payload) => {
            return state.verbs.filter(v => v.word_id == payload.id && v.type == payload.type);
        }
    },
    actions: {
        initVerbs(context){
            // dbアクセスして全権取得
            firebase.database().ref().once("value").then(function(snapshot){
                if(!snapshot.exists()){
                    return;
                }
                console.log('verb list has been initialized.')
                context.commit('initVerbs', snapshot.val())
            })
        },
        allowDisplaySearchResult(context){
            context.commit('allowDisplaySearchResult')
        },
        prohibitDisplaySearchResult(context){
            context.commit('prohibitDisplaySearchResult')
        }
    }
});