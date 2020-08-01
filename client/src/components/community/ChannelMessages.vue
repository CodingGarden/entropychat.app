<template>
  <div class="channel-messages">
    <div class="channel-messages__container">
      <ChannelMessage v-for="message in messages" :key="message._id"
        :message="message" />
    </div>

    <div class="channel-messages__input-wrapper">
      <form @submit.prevent="sendMessage()">
        <input v-model="message" type="text" placeholder="Message #👋welcome"/>
        <i class="channel-messages__input-wrapper__add" data-feather="plus-circle"></i>
      </form>
    </div>
  </div>
</template>

<script>
import ChannelMessage from '@/components/community/ChannelMessage.vue';
import { ref, watch } from '@vue/composition-api';
import { onMounted } from '@vue/composition-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';

export default {
  components: {
    ChannelMessage,
  },
  setup() {
    onMounted(() => {
      // eslint-disable-next-line no-undef
      feather.replace();
    });

    const { router } = useRouter();

    const message = ref('');

    const { user } = useState('auth', [
      'user',
    ]);

    const { loading, messages } = useState('messages', [
      'messages',
      'loading',
    ]);

    const { createMessage } = useActions('messages', [
      'createMessage',
    ]);

    const { logout } = useActions('auth', [
      'logout',
    ]);

    const { listen } = useActions('messages', [
      'listen',
    ]);

    const sendMessage = () => {
      createMessage({
        text: message.value,
      });
      message.value = '';
    };

    watch(user, () => {
      if (!user.value) {
        router.push('/');
      }
    });

    listen();

    return {
      user,
      logout,
      loading,
      messages,
      sendMessage,
      message,
    };
  },
};
</script>

<style lang="scss">
  .channel-messages {
    grid-area: CCM;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: $secondary;

    &__container {
      display: flex;
      flex-direction: column;

      max-height: calc(100vh - 46px - 69px);
      overflow-y: scroll;

      padding: 20px 0;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: $quaternary;
        border-radius: 6px;
      }

      &::-webkit-scrollbar-track {
        background-color: $tertiary;
      }
    }

    &__input-wrapper {
      width: 100%;
      padding: 0 16px;

      input {
        width: 100%;
        height: 40px;

        padding: 0 10px 0 47px;

        border-radius: 7px;

        color: $white;
        background-color: $primary;

        position: relative;

        opacity: 0.9;

        &::placeholder {
          color: $white;
        }

        ~ svg {
          position: relative;
          top: -32px;
          left: 10px;
          transition: 180ms ease-in-out;
        }
      }
    }
  }
</style>
