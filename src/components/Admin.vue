<template>
    <div>
        <ul class="nav nav-tabs mt-3">
            <li class="nav-item">
                <a class="nav-link" :class="{'active': selectedTabIndex == 1}" @click="changeTab(1)" href="#/admin">User Logs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  :class="{'active': selectedTabIndex == 2}" @click="changeTab(2)" href="#/admin">Verb Logs</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  :class="{'active': selectedTabIndex == 3}" @click="changeTab(3)" href="#/admin">Verb Summary</a>
            </li>
            <li class="nav-item">
                <a class="nav-link"  :class="{'active': selectedTabIndex == 4}" @click="changeTab(4)" href="#/admin">Verb Summary</a>
            </li>
        </ul>
        <UserLogs :class="{'d-none': selectedTabIndex != 1}"></UserLogs>
        <verbLogs :class="{'d-none': selectedTabIndex != 2}"></verbLogs>
        <VerbSummary :class="{'d-none': selectedTabIndex != 3}"></VerbSummary>
        <UserSummary :class="{'d-none': selectedTabIndex != 4}"></UserSummary>
    </div>
</template>

<script>
import UserLogs from './UserLogs.vue'
import VerbLogs from './verbLogs.vue'
import VerbSummary from './VerbSummary.vue'
import UserSummary from './UserSummary.vue'
import LogStore from '../stores/LogStore.js'

export default {
    components: {
        UserLogs,VerbLogs,VerbSummary,UserSummary
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
    mounted: function(){
        LogStore.dispatch('init')
    }
}
</script>