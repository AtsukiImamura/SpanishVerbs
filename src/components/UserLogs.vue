<template>
    <div>
        <div id="filter_area" class="my-3">
            <div class="rounded bg-light px-2 py-4">
                <div class="row">
                    <div class="col-xl-4 col-lg-5 col-md-6">
                        <label for="user-log-key-word" class="text-info">keyword</label>
                        <div class="row">
                            <div class="col-4 pr-1">
                                <select class="custom-select mr-sm-2" id="order-selection" v-model="keywordSearchTarget" >
                                    <option v-for="(target, index) in ['type', 'uid', 'name', 'count']" :value="target" :selected="target === keywordSearchTarget">{{ target }}</option>
                                </select>
                            </div>
                            <div class="col-8 pl-1">
                                <input v-model="searchKeyword" id="user-log-key-word" class="form-control" type="text" autocomplete="off" placeholder="keyword" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 col-md-6">
                        <label for="type-selection" class="text-info">type</label>
                        <div id="type-selection" class="row">
                            <div class="col custom-control custom-checkbox ml-3" v-for="(type, index) in dispTypeSelection">
                                <input id="select-access" type="checkbox" :value="type.code" v-model="dispTypes" class="custom-control-input" />
                                <label class="custom-control-label" for="select-access">{{ type.name }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-5">
                        <label class="mr-sm-2 text-info" for="order-selection">order</label>
                        <div class="row">
                            <div class="col-8">
                                <select class="custom-select mr-sm-2" id="order-selection" v-model="sortBy" >
                                    <option v-for="(target, index) in ['type', 'uid', 'name','created_at']" :value="target" :selected="target == sortBy">{{ target }}</option>
                                </select>
                            </div>
                            <div class="col-4  custom-control custom-checkbox">
                                <input id="order-direction" type="checkbox" v-model="orderAsc" class="custom-control-input" />
                                <label  class="custom-control-label" for="order-direction">asc</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-6">
                        <div class="row">
                            <div class="col">
                                <label for="search-from" class="text-info">from</label>
                                <input id="search-from" v-model="searchFrom" class="form-control" type="text" autocomplete="off" placeholder="yyyy-mm-dd hh:ii:ss" />
                            </div>
                            <div class="col">
                                <label for="search-to" class="text-info">to</label>
                                <input id="search-to" v-model="searchTo" class="form-control" type="text" autocomplete="off" placeholder="yyyy-mm-dd hh:ii:ss" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5">
                        <label for="type-selection" class="text-info">summary target</label>
                        <div id="type-selection" class="row">
                            <div class="col custom-control custom-checkbox ml-3" v-for="(target, index) in ['type', 'uid']" :key="index">
                                <input :id="'summary-target-'+target" type="checkbox" :value="target" v-model="summaryTargets" class="custom-control-input" />
                                <label class="custom-control-label" :for="'summary-target-'+target">{{ target }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3">
                        <label for="record-per-page" class="text-info">record per page</label>
                        <select class="custom-select mr-sm-2" id="record-per-page" v-model="recordPerPage" >
                            <option :value="num" v-for="num in [20, 50, 100]">{{ num }}</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-4">
            <div class="row mb-4">
                <div class="col-3 offset-xl-1 pl-1">
                    <input @click="deleteSelectedRecord()" type="button" class="btn btn-danger" value="delete" :class="{'disabled': selectedIndexes.length == 0}" />
                </div>
                <div class="col"> 
                    <nav aria-label="Page navigation example" class="mx-4"  :class="{'d-none': totalPage == 1, 'd-block' : totalPage > 1}">
                        <ul class="pagination mb-0">
                            <li class="page-item">
                            <a @click="previousPage()" class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                            </li>
                            <li @click="currentPage = index" class="page-item" v-for="index in totalPage"><a class="page-link"  :class="{'bg-info text-white': index == currentPage}" href="#/admin">{{ index }}</a></li>
                            <li class="page-item">
                            <a @click="nextPage()" class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="row">
                <div class="pb-2 border-bottom col-xl-1 offset-xl-1 col-lg-2">
                   <div class="row">
                        <div class="col-4 custom-control custom-checkbox">
                            <input @click="onAllSelectChecked()" id="select-all-record" type="checkbox" :value="true"  v-model="selectedAll" class="custom-control-input" />
                            <label class="custom-control-label" for="select-all-record"></label>
                        </div>
                        <div class="col-8">
                            <span>type</span>
                        </div>
                   </div>
                </div>
                <div class="pb-2 border-bottom col-xl-3 col-lg-4"><span>uid</span></div>
                <div class="pb-2 border-bottom col-xl-2 col-lg-3"><span>name</span></div>
                <div class="pb-2 border-bottom col-xl-2 col-lg-2"><span>created at</span></div>
                <div class="pb-2 border-bottom col-xl-1 col-lg-1"><span>count</span></div>
            </div>
            <div class="row" v-for="(log,index) in pageSummaryList" :key="index">
                <div class="border-bottom py-2 col-xl-1 offset-xl-1 col-lg-2">
                    <div class="row">
                        <div class="col-4 custom-control custom-checkbox">
                            <input :id="'select-record-'+index" type="checkbox" class="custom-control-input"  :value="log.id" v-model="selectedIndexes" />
                            <label class="custom-control-label" :for="'select-record-'+index"></label>
                        </div>
                        <div class="col-8">
                            <span>{{ log.type }}</span>
                        </div>
                    </div>
                </div>
                <div class="border-bottom py-2 col-xl-3 col-lg-4"><span>{{ log.uid }}</span></div>
                <div class="border-bottom py-2 col-xl-2 col-lg-3"><span>{{ log.name }}</span></div>
                <div class="border-bottom py-2 col-xl-2 col-lg-2"><span>{{ log.count == 1 ? log.created_at : ''}}</span></div>
                <div class="border-bottom py-2 col-xl-1 col-lg-1"><span>{{ summaryTargets.length > 0 ? log.count : '' }}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
import LogStore from '../stores/LogStore.js'
import LogUtil from '../utils/LogUtil.js'
import FirebaseUtil from '../utils/FirebaseUtil.js'

export default {
    data: function(){
        return {
            dispTypes: [0,10,20],
            dispTypeSelection: [{code:0, name:'access'},{code:20, name:'login'},{code:30, name:'logout'}],
            sortBy: 'created_at',
            orderAsc: false,
            keywordSearchTarget: 'type',
            searchKeyword: '',
            searchFrom: '',
            searchTo: '',
            summaryTargets: [],
            summaryTargetBase: ['type', 'uid'],
            recordPerPage: 20,
            currentPage: 1,
            selectedIndexes: [],
            selectedAll: false
        }
    },
    methods: {
        nextPage(){
            if(this.currentPage < this.totalPage)
            this.currentPage++
        },
        previousPage(){
            if(this.currentPage >1)
            this.currentPage--
        },
        onAllSelectChecked(){
            if(!this.selectedAll){
                this.selectAll()
            }else{
                this.unselectAll()
            }
        },
        selectAll(){
            for(let log of this.pageSummaryList){
                if(this.selectedIndexes.includes(log.id)){
                    continue
                }
                this.selectedIndexes.push(log.id)
            }
        },
        unselectAll(){
            this.selectedIndexes = []
        },
        deleteSelectedRecord(){
            FirebaseUtil.deleteUserLogsByIds(this.selectedIndexes)
            this.selectedAll = false
        }
    },
    computed: {
        users(){
            return LogStore.state.users
        },
        summaryList(){
            let _this = this
            let logs = LogUtil.filterByType(LogStore.state.userLogs, this.dispTypes)

            if(this.searchKeyword !== ''){
                logs = logs.filter(log => (''+log[this.keywordSearchTarget]).startsWith(this.searchKeyword))
            }
            if(this.searchFrom !== ''){
                logs = logs.filter(log => log.created_at >= this.searchFrom)
            }
            if(this.searchTo !== ''){
                logs = logs.filter(log => log.created_at <=  this.searchTo)
            }
            logs =  LogUtil.reduceLogs(logs, this.summaryTargets)
            logs = logs.map(log => {
                log.name = _this.users[log.uid] == null ? '' : _this.users[log.uid].name
                return log
            })

            logs = LogUtil.sortLogs(logs, this.orderAsc, (log) => log[this.sortBy])

            return logs
        },
        pageSummaryList(){
            return this.summaryList.slice((this.currentPage-1)*this.recordPerPage, this.currentPage*this.recordPerPage)
        },
        totalPage(){
            return Math.floor(this.summaryList.length / this.recordPerPage) + 1
        }
    },
    watch: {
        recordPerPage: function(val){
            this.currentPage = 1
        }
    },
    mounted: function(){
        LogStore.dispatch('initUserLogs')
    }
}
</script>