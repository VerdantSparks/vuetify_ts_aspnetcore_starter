import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './rootState'
import Vue from "vue";
import { demo } from "./demo";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    strict: true,
    //default state of type RootState
    state: {
        version: ''
    },
    modules: { demo }
};

export default new Vuex.Store<RootState>(store);