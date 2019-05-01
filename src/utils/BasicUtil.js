module.exports = {
    getFormatCurrentDate(){
        return this.getFormatDate(new Date())
    },
    /** dateを 'yyyy-mm-dd hh-ii-ss' 形式に変換する */
    getFormatDate(date){
        let month = date.getMonth()+1
        let day = date.getDate()
        let hour = date.getHours();
        let minute = date.getMinutes()
        let second = date.getSeconds()
        return date.getFullYear()
                +'-'+(month  < 10 ? ('0' + month)    : month)
                +'-'+(day    < 10 ? ('0' + day)      : day)
                +' '+(hour   < 10 ? ('0' + hour)     : hour)
                +':'+(minute < 10 ? ('0' + minute)   : minute)
                +':'+(second < 10 ? ('0' + second)   : second)
    },
    /** 'yyyy-mm-dd hh-ii-ss'形式の日付を比較する */
    compareDate(a,b){
        // TODO: 実装
        return a - b
    }

}