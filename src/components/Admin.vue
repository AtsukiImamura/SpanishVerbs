<template>
    <div :class="{'d-none': userLogs.length == 0}">
        <ul class="nav nav-tabs mt-3">
            <li class="nav-item">
                <a class="nav-link" :class="{'active': selectedTabIndex == 1}" @click="changeTab(1)" href="#/admin">User Logs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  :class="{'active': selectedTabIndex == 2}" @click="changeTab(2)" href="#/admin">Verb Logs</a>
            </li>
        </ul>
        <UserLogs :class="{'d-none': selectedTabIndex != 1}"></UserLogs>
        <verbLogs :class="{'d-none': selectedTabIndex != 2}"></verbLogs>
    </div>
</template>

<script>
import UserLogs from './UserLogs.vue'
import VerbLogs from './verbLogs.vue'
import LogStore from '../stores/LogStore.js'

export default {
    components: {
        UserLogs,VerbLogs
    },
    data: function(){
        return {
            selectedTabIndex: 1
        }
    },
    methods: {
        changeTab(index){
            this.selectedTabIndex = index
        }
    },
    computed: {
        userLogs(){
            return LogStore.state.userLogs
        }
    },
    mounted: function(){
        LogStore.dispatch('init')
    }
}
</script>