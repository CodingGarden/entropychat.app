import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import messages from './modules/messages';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    messages,
  },
});
