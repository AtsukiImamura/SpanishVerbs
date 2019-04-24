import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/** 検索結果候補の表示数 */
const VERB_RESULT_NUM = 15

const testVerbs = [
	{word_id: 1,type: 0,person: 0,word: "abandono"}, 
	{word_id: 1,type: 0,person: 1,word: "abandonas"}, 
	{word_id: 1,type: 0,person: 2,word: "abandona"}, 
	{word_id: 1,type: 0,person: 3,word: "abandonamos"}, 
	{word_id: 1,type: 0,person: 4,word: "abandonáis"}, 
	{word_id: 1,type: 0,person: 5,word: "abandonan"}, 
	{word_id: 1,type: 1,person: 0,word: "abandoné"}, 
	{word_id: 1,type: 1,person: 1,word: "abandonaste"}, 
	{word_id: 1,type: 1,person: 2,word: "abandonó"}, 
	{word_id: 1,type: 1,person: 3,word: "abandonamos"}, 
	{word_id: 1,type: 1,person: 4,word: "abandonasteis"}, 
	{word_id: 1,type: 1,person: 5,word: "abandonaron"}, 
	{word_id: 1,type: 2,person: 0,word: "abandonaba"}, 
	{word_id: 1,type: 2,person: 1,word: "abandonabas"}, 
	{word_id: 1,type: 2,person: 2,word: "abandonaba"}, 
	{word_id: 1,type: 2,person: 3,word: "abandonábamos"}, 
	{word_id: 1,type: 2,person: 4,word: "abandonabais"}, 
	{word_id: 1,type: 2,person: 5,word: "abandonaban"}, 
	{word_id: 1,type: 3,person: 0,word: "abandonaré"}, 
	{word_id: 1,type: 3,person: 1,word: "abandonarás"}, 
	{word_id: 1,type: 3,person: 2,word: "abandonará"}, 
	{word_id: 1,type: 3,person: 3,word: "abandonaremos"}, 
	{word_id: 1,type: 3,person: 4,word: "abandonaréis"}, 
	{word_id: 1,type: 3,person: 5,word: "abandonarán"}, 
	{word_id: 1,type: 4,person: 0,word: "abandonaría"}, 
	{word_id: 1,type: 4,person: 1,word: "abandonarías"}, 
	{word_id: 1,type: 4,person: 2,word: "abandonaría"}, 
	{word_id: 1,type: 4,person: 3,word: "abandonaríamos"}, 
	{word_id: 1,type: 4,person: 4,word: "abandonaríais"}, 
	{word_id: 1,type: 4,person: 5,word: "abandonarían"}, 
	{word_id: 1,type: 5,person: 0,word: "abandona"}, 
	{word_id: 1,type: 5,person: 1,word: "abandone"}, 
	{word_id: 1,type: 5,person: 2,word: "abandonemos"}, 
	{word_id: 1,type: 5,person: 3,word: "abandonad"}, 
	{word_id: 1,type: 5,person: 4,word: "abandonen"}, 
	{word_id: 1,type: 6,person: 0,word: "abandone"}, 
	{word_id: 1,type: 6,person: 1,word: "abandones"}, 
	{word_id: 1,type: 6,person: 2,word: "abandone"}, 
	{word_id: 1,type: 6,person: 3,word: "abandonemos"}, 
	{word_id: 1,type: 6,person: 4,word: "abandonéis"}, 
	{word_id: 1,type: 6,person: 5,word: "abandonen"}, 
	{word_id: 1,type: 7,person: 0,word: "abandonara"}, 
	{word_id: 1,type: 7,person: 1,word: "abandonaras"}, 
	{word_id: 1,type: 7,person: 2,word: "abandonara"}, 
	{word_id: 1,type: 7,person: 3,word: "abandonáramos"}, 
	{word_id: 1,type: 7,person: 4,word: "abandonarais"}, 
	{word_id: 1,type: 7,person: 5,word: "abandonaran"}, 
	{word_id: 1,type: 10,person: 0,word: "abandonar"}, 
	{word_id: 1,type: 10,person: 1,word: "abandonando"}, 
	{word_id: 1,type: 10,person: 2,word: "abandonado"}, 
	{word_id: 6,type: 0,person: 0,word: "aborrezco"}, 
	{word_id: 6,type: 0,person: 1,word: "aborreces"}, 
	{word_id: 6,type: 0,person: 2,word: "aborrece"}, 
	{word_id: 6,type: 0,person: 3,word: "aborrecemos"}, 
	{word_id: 6,type: 0,person: 4,word: "aborrecéis"}, 
	{word_id: 6,type: 0,person: 5,word: "aborrecen"}, 
	{word_id: 6,type: 1,person: 0,word: "aborrecí"}, 
	{word_id: 6,type: 1,person: 1,word: "aborreciste"}, 
	{word_id: 6,type: 1,person: 2,word: "aborreció"}, 
	{word_id: 6,type: 1,person: 3,word: "aborrecimos"}, 
	{word_id: 6,type: 1,person: 4,word: "aborrecisteis"}, 
	{word_id: 6,type: 1,person: 5,word: "aborrecieron"}, 
	{word_id: 6,type: 2,person: 0,word: "aborrecía"}, 
	{word_id: 6,type: 2,person: 1,word: "aborrecías"}, 
	{word_id: 6,type: 2,person: 2,word: "aborrecía"}, 
	{word_id: 6,type: 2,person: 3,word: "aborrecíamos"}, 
	{word_id: 6,type: 2,person: 4,word: "aborrecíais"}, 
	{word_id: 6,type: 2,person: 5,word: "aborrecían"}, 
	{word_id: 6,type: 3,person: 0,word: "aborreceré"}, 
	{word_id: 6,type: 3,person: 1,word: "aborrecerás"}, 
	{word_id: 6,type: 3,person: 2,word: "aborrecerá"}, 
	{word_id: 6,type: 3,person: 3,word: "aborreceremos"}, 
	{word_id: 6,type: 3,person: 4,word: "aborreceréis"}, 
	{word_id: 6,type: 3,person: 5,word: "aborrecerán"}, 
	{word_id: 6,type: 4,person: 0,word: "aborrecería"}, 
	{word_id: 6,type: 4,person: 1,word: "aborrecerías"}, 
	{word_id: 6,type: 4,person: 2,word: "aborrecería"}, 
	{word_id: 6,type: 4,person: 3,word: "aborreceríamos"}, 
	{word_id: 6,type: 4,person: 4,word: "aborreceríais"}, 
	{word_id: 6,type: 4,person: 5,word: "aborrecerían"}, 
	{word_id: 6,type: 5,person: 0,word: "aborrece"}, 
	{word_id: 6,type: 5,person: 1,word: "aborrezca"}, 
	{word_id: 6,type: 5,person: 2,word: "aborrezcamos"}, 
	{word_id: 6,type: 5,person: 3,word: "aborreced"}, 
	{word_id: 6,type: 5,person: 4,word: "aborrezcan"}, 
	{word_id: 6,type: 6,person: 0,word: "aborrezca"}, 
	{word_id: 6,type: 6,person: 1,word: "aborrezcas"}, 
	{word_id: 6,type: 6,person: 2,word: "aborrezca"}, 
	{word_id: 6,type: 6,person: 3,word: "aborrezcamos"}, 
	{word_id: 6,type: 6,person: 4,word: "aborrezcáis"}, 
	{word_id: 6,type: 6,person: 5,word: "aborrezcan"}, 
	{word_id: 6,type: 7,person: 0,word: "aborreciera"}, 
	{word_id: 6,type: 7,person: 1,word: "aborrecieras"}, 
	{word_id: 6,type: 7,person: 2,word: "aborreciera"}, 
	{word_id: 6,type: 7,person: 3,word: "aborreciéramos"}, 
	{word_id: 6,type: 7,person: 4,word: "aborrecierais"}, 
	{word_id: 6,type: 7,person: 5,word: "aborrecieran"}, 
	{word_id: 6,type: 10,person: 0,word: "aborrecer"}, 
	{word_id: 6,type: 10,person: 1,word: "aborreciendo"}, 
	{word_id: 6,type: 10,person: 2,word: "aborrecido"},
]

export default new Vuex.Store({
    state: {
        verbs: [], //testVerbs,
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