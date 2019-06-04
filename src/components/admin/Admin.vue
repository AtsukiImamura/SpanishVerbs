<template>
    <div :class="{'d-none': userLogs.length == 0}">
        <ul class="nav nav-tabs mt-3">
            <li class="nav-item">
                <a class="nav-link" :class="{'active': currentTabComponent == 'UserLogs'}" @click="currentTabComponent = 'UserLogs'" href="#/admin">User Logs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  :class="{'active': currentTabComponent == 'VerbLogs'}" @click="currentTabComponent = 'VerbLogs'" href="#/admin">Verb Logs</a>
            </li>
        </ul>
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
    </div>
</template>

<script>
import LogStore from '../../stores/LogStore.js'
import UserLogs from './logs/UserLogs.vue'
import VerbLogs from './logs/VerbLogs.vue'

export default {
    components: {
        UserLogs, VerbLogs
    },
    data: function(){
        return {
            currentTabComponent: 'UserLogs'
        }
    },
    computed: {
        userLogs(){
            return LogStore.state.userLogs
        }
    },
    mounted: function(){
        LogStore.dispatch('initUsers')
    }
}
</script>