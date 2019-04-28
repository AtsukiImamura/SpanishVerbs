import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

const basicUtil = require('../utils/BasicUtil.js')
const firebaseUtil = require('../utils/FirebaseUtil.js')


export default new Vuex.Store({
    state: {
        verbLogs: [],
        userLogs: [],
        users: {}
    },
    mutations: {
        userLogs(state, userLogsObj){
            state.userLogs = Object.keys(userLogsObj).map(key => userLogsObj[key])
        },
        verbLogs(state, verbLogsObj){
            state.verbLogs = Object.keys(verbLogsObj).map(key => verbLogsObj[key])
        },
        users(state, usersObj){
            state.users = usersObj
        }
    },
    getters: {
        // search: (state) => (keyword) => {

        // },
    },
    actions: {
        init(context){
            try{ 
                firebase.database().ref("logs/users").once("value").then(function(snapshot){
                    if(!snapshot.exists()){
                        return
                    }
                    context.commit('userLogs', snapshot.val())
                })
            }catch(e){
                console.log('failed to fetch users log data.')
            }
            try{
                firebase.database().ref("logs/verbs").once("value").then(function(snapshot){
                    if(!snapshot.exists()){
                        return
                    }
                    context.commit('verbLogs', snapshot.val())
                })
            }catch(e){
                console.log('failed to fetch verbs log data.')
            }
            try{
                firebase.database().ref("users").once("value").then(function(snapshot){
                    if(!snapshot.exists()){
                        return
                    }
                    context.commit('users', snapshot.val())
                })
            }catch(e){
                console.log('failed to fetch users data.')
            }
        }
    }
})