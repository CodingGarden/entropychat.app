<template>
  <div class="messages">
    <Navbar></Navbar>
    <main class="messages__main">
      <div class="messages__main--body">
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

.messages__main--body {
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 70px; /* this is the chatbox height probably wants to be more responsive */
}

.messages__main--body::-webkit-scrollbar {
    position: relative;
    width: 7px;
    height: 8px;
}

.messages__main--body::-webkit-scrollbar-track {
    border-radius: 10px;
}

.messages__main--body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: $primary;
}

.messages__main--body::before {
  content: '';
  position: absolute;
  width: 100vw;
  height: 50vh;
  background: linear-gradient($bg 1%, rgba(1,1,1,0));
  top: 0px;
}


.messages__main--body::after {
  content: '';
  position: absolute;
  width: 100vw;
  height: 50vh;
  background: linear-gradient(rgba(1,1,1,0) 80%, $bg);
  bottom: 0px;
}



.messages__main--bottom {
  position: absolute;
  bottom: 0px;
}
</style>
