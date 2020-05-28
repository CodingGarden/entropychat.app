import feathers from '../../feathers';

const loading = () => new Promise((resolve) => setTimeout(resolve, 5000));

export default {
  namespaced: true,
  state: {
    loading: false,
    error: '',
    user: null,
  },
  actions: {
    async reAuth({ state }) {
      try {
        state.loading = true;
        const user = await feathers.reAuthenticate();
        await loading();
        state.user = user.user;
      } catch (error) {}
      state.loading = false;
    },
    async logout({ state }) {
      try {
        await feathers.logout();
      } catch (error) {}
      state.user = null;
    },
    loginWithGithub({ state }) {
      state.loading = true;
      async function receiveMessage(event) {
        if (event.origin !== "http://localhost:3030") {
          console.log('invalid origin', event.origin);
        } else {
          const user = await feathers.authenticate({
            strategy: 'jwt',
            accessToken: event.data.token,
          });
          await loading();
          state.user = user.user;
        }
        state.loading = false;
      }
      window.addEventListener('message', receiveMessage, {
        once: true,
      });
      window.open('http://localhost:3030/oauth/github');
    },
  },
};
