import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/** 検索結果候補の表示数 */
const VERB_RESULT_NUM = 15

export default new Vuex.Store({
    state: {
        verbs: [],
        canDisplaySearchResult: true,
        selectedWordId: '',
        selectedWordList: [],
        user: null,
        authenticated: false
    },
    mutations: {
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
        /** 単語を選択する */
        selectWord(state, id){
            state.selectedWordId = id
            state.selectedWordList = state.verbs
                                        .filter(v => v.word_id == id)
                                        .map(v => {
                                            switch(v.person){
                                                case 0:
                                                    v.person_disp = 'yo'
                                                    break
                                                case 1:
                                                    v.person_disp = 'tu'
                                                    break
                                                case 2:
                                                    v.person_disp = 'utd'
                                                    break
                                                case 3:
                                                    v.person_disp = 'nos'
                                                    break
                                                case 4:
                                                    v.person_disp = 'vos'
                                                    break
                                                case 5:
                                                    v.person_disp = 'uds'
                                                    break
                                            }
                                            return v
                                        })
        },
        setUser(state, user){
            state.user = user
        },
        authenticated(state, val){
            state.authenticated = val
        }
    },
    getters: {
        /* 単語を検索 */
        search: (state) => (keyword) => {
            // 先頭にマッチするもの
            let startWith = state.verbs.filter(v => v.word.startsWith(keyword))
            if(startWith.length >= VERB_RESULT_NUM){
                return startWith.slice(0, VERB_RESULT_NUM)
            }
            
            // 先頭マッチが少ない時は途中に含むものも混ぜる
            let includes = state.verbs.filter(v => v.word.includes(keyword))
            return startWith.concat(includes.slice(0, VERB_RESULT_NUM - startWith.length))
        },
        canDisplaySearchResult: (state) => state.canDisplaySearchResult,
        getByWordIdAndType: (state) => (payload) => {
            return state.verbs.filter(v => v.word_id == payload.id && v.type == payload.type)
        },
        user(state){
            return state.user
        }
    },
    actions: {
        init(context){
            context.dispatch('initUserInfo')
        },
        /** 動詞リストを全件取得して保持する TODO: firebaseのクエリがいい感じになったらその都度検索するようにしたい */
        initVerbs(context){
            // dbアクセスして全権取得
            firebase.database().ref().once("value").then(function(snapshot){
                if(!snapshot.exists()){
                    return
                }
                context.commit('initVerbs', snapshot.val())
            })
        },
        initVerbsIfNot(context){
            if(context.state.verbs.length > 0){
                return
            }
            context.dispatch('initVerbs')
        },
        /** 検索結果候補リストの表示を許可する */
        allowDisplaySearchResult(context){
            context.commit('allowDisplaySearchResult')
        },
        /** 検索結果候補リストの表示を禁止する（他の場所がクリックされたときに呼び出す想定 */
        prohibitDisplaySearchResult(context){
            context.commit('prohibitDisplaySearchResult')
        },
        /** ユーザー状態の監視を始める。ログアウトしたら user = null になる */
        initUserInfo(context){
            firebase.auth().onAuthStateChanged(function(user) {
                context.commit('setUser', user)
                if(!user) return
                context.dispatch('initVerbsIfNot')
            })
        },
        /** 認証されているか */
        authenticated(context){
            return context.state.user != null
        },
        loginWithGoogle(context) {
            var provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider).then(function (result) {
                context.commit('authenticated', result.user != null)
            }).catch(function (error) {
                console.log('loginWithGoogle ERROR')
                console.log(error.message)
            })
        },
        logout(context) {
            firebase.auth().signOut().then(() => context.commit('authenticated', false))
        }
    }
})