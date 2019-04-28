module.exports = {
    filterByType(logs, types){
        let numberDispTypes = types.map(type => Number(type))
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
        let _this = this
        return logs.sort(function(a,b){
            return (_this.compareString(a.name, b.name) ? 1 : -1)*(asc ? 1 : -1)
        })
    },
    sortByUID(logs, asc){
        let _this = this
        return logs.sort(function(a,b){
            return (_this.compareString(a.uid, b.uid) ? 1 : -1)*(asc ? 1 : -1)
        })
    },
    sortByCreatedAt(logs, asc){
        let _this = this
        return logs.sort(function(a,b){
            return (_this.compareString(a.created_at, b.created_at) ? 1 : -1)*(asc ? 1 : -1)
        })
    },
    compareString(a,b){
        return (a ? a : '') >= (b ? b : '')
    },
    sortLogs(logs, asc, getTarget){
        let _this = this
        return logs.sort(function(a,b){
            return (_this.compareString(getTarget(a), getTarget(b)) ? 1 : -1)*(asc ? 1 : -1)
        })
    },
    reduceLogs(logs, keys){
        if(keys.length == 0){
            return logs.map(log => {
                log.count = 1
                return log
            })
        }
        let reducedObj = logs.reduce((res, log) => {
            let id = keys.map(key => log[key]).join('-')
            id = (id === '' ? 'null' : id)  
            if(!res[id]){
                res[id] = log
                res[id].count = 0
            }
            res[id].count ++
            return res
        }, {})

        return Object.keys(reducedObj).map(key => reducedObj[key])
    }
}