const basicUtil = require('./BasicUtil.js')

module.exports = {
    /** 新規ユーザーログインデータを挿入する */
    insertUserInfo(user){
        if(!firebase){
            return
        }
        if(!user){
            console.log('[insertUserInfo] user not exists.')
            return
        }
        let created_at = basicUtil.getFormatCurrentDate()
        firebase.database().ref("users/"+user.uid).set({ name: user.displayName, count: 0, email: user.email, created_at: created_at, last_login_at: created_at})
        // "$uid === auth.uid || !data.exists()"
    },
    /** ユーザーログインデータを挿入する */
    insertUserCount(uid, userInfo){
        if(!firebase){
            return
        }
        firebase.database().ref("users/"+uid+"/count").set(userInfo.count)
        firebase.database().ref("users/"+uid+"/last_login_at").set(userInfo.last_login_at)
    },
    /** ユーザーのログインを記録する */
    incrementUserCount(user){
        if(!firebase){
            return
        }
        if(!user){
            return
        }
        let _this = this
        firebase.database().ref("users/"+user.uid).once("value").then(function(snapshot){
            // ユーザーのログインデータがない場合は作ってからやり直す
            if(!snapshot.exists()){
                _this.insertUserInfo(user)
                _this.incrementUserCount(user)
                return
            }
            // カウントをインクリメントして挿入
            let userInfo = snapshot.val()
            userInfo.count = userInfo.count + 1
            userInfo.last_login_at = basicUtil.getFormatCurrentDate()
            _this.insertUserCount(user.uid, userInfo)
        })
    },
    logSearchVerb(user, verb){
        firebase.database().ref("logs/verbs").push({
            uid: user ? user.uid : 'no user',
            word_id: verb.word_id,
            type: verb.type,
            person: verb.person,
            created_at: basicUtil.getFormatCurrentDate(),
            deleted: 0,
            word: verb.word
        })
    },
    logUserLogin(user){
        firebase.database().ref("logs/users").push({
            uid: user ? user.uid : 'no user',
            type: 10,
            created_at: basicUtil.getFormatCurrentDate(),
            deleted: 0
        })
    },
    logUserLogout(user){
        firebase.database().ref("logs/users").push({
            uid: user ? user.uid : 'no user',
            type: 20,
            created_at: basicUtil.getFormatCurrentDate(),
            deleted: 0
        })
    },
    logAccess(){
        firebase.database().ref("logs/users").push({
            uid: null,
            type: 0,
            created_at: basicUtil.getFormatCurrentDate(),
            deleted: 0
        })
    },
}