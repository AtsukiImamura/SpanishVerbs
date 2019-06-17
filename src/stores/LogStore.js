import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    verbLogs: [],
    userLogs: [],
    users: {}
  },
  mutations: {
    userLogs(state, userLogsObj) {
      state.userLogs = Object.keys(userLogsObj).map(key => {
        let log = userLogsObj[key];
        log.id = key;
        return log;
      });
    },
    verbLogs(state, verbLogsObj) {
      state.verbLogs = Object.keys(verbLogsObj).map(key => {
        let log = verbLogsObj[key];
        log.id = key;
        return log;
      });
    },
    users(state, usersObj) {
      state.users = usersObj;
    },
    deleteUserLogById(state, id) {
      state.userLogs = state.userLogs.filter(log => log.id !== id);
    }
  },
  actions: {
    initUsers(context) {
      try {
        firebase
          .database()
          .ref("users")
          .on("value", function(snapshot) {
            if (!snapshot.exists()) {
              return;
            }
            context.commit("users", snapshot.val());
          });
      } catch (e) {
        console.log("failed to fetch users data.");
      }
    },
    initUserLogs(context) {
      try {
        firebase
          .database()
          .ref("logs/users")
          .on("value", function(snapshot) {
            if (!snapshot.exists()) {
              return;
            }
            context.commit("userLogs", snapshot.val());
          });
      } catch (e) {
        console.log("failed to fetch users log data.");
      }
    },
    initVerbLogs(context) {
      try {
        firebase
          .database()
          .ref("logs/verbs")
          .on("value", function(snapshot) {
            if (!snapshot.exists()) {
              return;
            }
            context.commit("verbLogs", snapshot.val());
          });
      } catch (e) {
        console.log("failed to fetch verbs log data.");
      }
    }
  }
});
