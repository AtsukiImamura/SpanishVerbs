<template>
    <div>
        <div id="filter_area" class="my-3">
            <div class="rounded bg-light px-2 py-4">
                <div class="row">
                    <div class="col-4">
                        <label for="user-log-key-word" class="text-info">keyword</label>
                        <input id="user-log-key-word" class="form-control" type="text" autocomplete="off" placeholder="keyword" />
                    </div>
                    <div class="col-4">
                        <label for="type-selection" class="text-info">type</label>
                        <div id="type-selection" class="row">
                            <div class="col custom-control custom-checkbox ml-3">
                                <input id="select-access" type="checkbox" value="0" v-model="dispTypes" class="custom-control-input" />
                                <label class="custom-control-label" for="select-access">access</label>
                            </div>
                            <div class="col custom-control custom-checkbox">
                                <input id="select-login" type="checkbox" value="10" v-model="dispTypes" class="custom-control-input" />
                                <label class="custom-control-label" for="select-login">login</label>
                            </div>
                            <div class="col custom-control custom-checkbox">
                                <input id="select-logout" type="checkbox" value="20" v-model="dispTypes" class="custom-control-input" />
                                <label class="custom-control-label" for="select-logout">logout</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <label class="mr-sm-2 text-info" for="order-selection">order</label>
                        <select class="custom-select mr-sm-2" id="order-selection" v-model="sortBy" >
                            <option value="0" selected>type</option>
                            <option value="1">uid</option>
                            <option value="2">name</option>
                            <option value="3">created at</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-4">
            <div class="row">
                <div class="pb-2 border-bottom col-xl-1 offset-xl-1 col-lg-2"><span>type</span></div>
                <div class="pb-2 border-bottom col-xl-3 col-lg-4"><span>uid</span></div>
                <div class="pb-2 border-bottom col-xl-2 col-lg-3"><span>name</span></div>
                <div class="pb-2 border-bottom col-xl-2 col-lg-3"><span>created at</span></div>
            </div>
            <div class="row" v-for="(log,index) in dispLogs" :key="index">
                <div class="border-bottom py-2 col-xl-1 offset-xl-1 col-lg-2"><span>{{ log.type }}</span></div>
                <div class="border-bottom py-2 col-xl-3 col-lg-4"><span>{{ log.uid }}</span></div>
                <div class="border-bottom py-2 col-xl-2 col-lg-3"><span>{{ users[log.uid] == null ? '' : users[log.uid].name }}</span></div>
                <div class="border-bottom py-2 col-xl-2 col-lg-3"><span>{{ log.created_at }}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import BasicUtil from '../utils/BasicUtil.js'
import LogStore from '../stores/LogStore.js'

export default {
    data: function(){
        return {
            dispTypes: [],
            sortBy: 1,
            orderAsc: true
        }
    },
    methods: {
        filterByType(logs){
            let numberDispTypes = this.dispTypes.map(type => Number(type))
            return Object.keys(logs)
                .filter(key => numberDispTypes.includes(logs[key].type))
                .map(key =>  logs[key])
        },
        sortByType(logs, asc){
            return logs.sort(function(a,b){
                return (Number(a.type) - Number(b.type))*(asc ? 1 : -1)
            })
        },
        sortByName(logs, asc){
            return logs.sort(function(a,b){
                return (a.name - b.name)*(asc ? 1 : -1)
            })
        },
        sortByUID(logs, asc){
            return logs.sort(function(a,b){
                return (a.uid - b.uid)*(asc ? 1 : -1)
            })
        },
        sortByCreatedAt(logs, asc){
            return logs.sort(function(a,b){
                return (BasicUtil.compareDate(a.created_at, b.created_at))*(asc ? 1 : -1)
            })
        }
    },
    computed: {
        users(){
            return LogStore.state.users
        },
        dispLogs(){
            let filteredLogs = this.filterByType(LogStore.state.userLogs)
            switch(Number(this.sortBy)){
                case 0:
                    filteredLogs = this.sortByType(filteredLogs, this.orderAsc)
                    break
                case 1:
                    filteredLogs = this.sortByUID(filteredLogs, this.orderAsc)
                    break
                case 2:
                    filteredLogs = this.sortByName(filteredLogs, this.orderAsc)
                    break
                case 3:
                    filteredLogs = this.sortByCreatedAt(filteredLogs, this.orderAsc)
                    break
            }
            return filteredLogs
        }
    }
}
</script>