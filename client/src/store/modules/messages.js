import feathers from '../../feathers';

let listener;

export default {
  namespaced: true,
  state: {
    loading: false,
    error: '',
    messages: [],
  },
  actions: {
    async createMessage(_, message) {
      await feathers.service('messages').create(message);
    },
    async listen({ state }) {
      const messages = await feathers.service('messages').find({
        query: {
          $sort: { createdAt: 1 },
          $limit: 100,
        },
      });
      state.messages = messages.data;
      feathers.service('messages').off('created', listener);
      listener = (message) => {
        state.messages.push(message);
      };
      feathers.service('messages').on('created', listener);
    },
  },
};
