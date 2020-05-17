import feathers from '../../feathers';

let listener;

export default {
  namespaced: true,
  state: {
    loading: false,
    error: '',
    usersById: {},
    messages: [],
  },
  actions: {
    async createMessage(_, message) {
      await feathers.service('messages').create(message);
    },
    async listen({ state }) {
      const users = await feathers.service('users').find({
        query: {
          $limit: 100,
        },
      });
      state.usersById = users.data.reduce((byId, user) => {
        byId[user._id] = user;
        return byId;
      }, {});
      const messages = await feathers.service('messages').find({
        query: {
          $sort: { createdAt: 1 },
          $limit: 100,
        },
      });
      state.messages = messages.data.map((message) => {
        message.user = state.usersById[message.user_id];
        return message;
      });
      feathers.service('messages').off('created', listener);
      listener = (message) => {
        // TODO: make sure user exists
        message.user = state.usersById[message.user_id];
        state.messages.push(message);
      };
      feathers.service('messages').on('created', listener);
    },
  },
};
