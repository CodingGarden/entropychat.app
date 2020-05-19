<template>
  <div class="messages">
    <Navbar></Navbar>
    <main class="messages__main">
      <div>
        <Message v-for="message in messages" :key="message._id" :message="message" />
      </div>
      <ChatBox class="messages__main--bottom" />
    </main>
  </div>
</template>

<script>
import { watch } from '@vue/composition-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';
// import Button from '@/components/Button.vue';
// import Loading from '@/components/Loading.vue';
import Navbar from '@/components/Navbar.vue';
import ChatBox from '@/components/ChatBox.vue';
import Message from '@/components/Message.vue';

export default {
  name: 'Messages',
  components: {
    Navbar,
    ChatBox,
    Message,
    // Button,
    // Loading,
  },
  setup() {
    const { router } = useRouter();

    const { user } = useState('auth', [
      'user',
    ]);

    const { loading, messages } = useState('messages', [
      'messages',
      'loading',
    ]);

    const { logout } = useActions('auth', [
      'logout',
    ]);

    const { listen } = useActions('messages', [
      'listen',
    ]);

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
    };
  },
};
</script>

<style lang="scss">
.messages {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background: $bg;
}

.messages__main {
  height: 100%;
  position: relative;
}

.messages__main--bottom {
  position: absolute;
  bottom: 0px;
}
</style>
