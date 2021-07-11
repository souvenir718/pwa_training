import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sParam1: "",
        sParam2: "",
    },
    mutations: {
        fnSetData: function(state, payload) {
            return (state.sTitle = payload);
        },
    },
    getters: {
        fnGetData(state) {
            return state.sTitle;
        },
    },
    actions: {},
    modules: {},
});
