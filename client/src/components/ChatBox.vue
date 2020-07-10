<template>
  <form class="chatbox" @submit.prevent="sendMessage()">
    <input v-model="message" class="chatbox__input" placeholder="Send a Message" />
    <button type="submit" class="like" name="foo" value="bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-send"
      >
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    </button>
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useState, useActions } from '@u3u/vue-hooks';

export default {
  setup() {
    const message = ref('');

    const { user } = useState('auth', [
      'user'
     ]);

    const { createMessage } = useActions('messages', [
      'createMessage'
    ]);

    const sendMessage = () => {
      createMessage({
        text: message.value
      });
      message.value = '';
    };

    return {
      sendMessage,
      message,
    };
  },
};
</script>

<style lang="scss">
.chatbox {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.chatbox__input {
  background: $primary;
  padding: 0 2rem;
  width: 90%;
  height: 70%;
  outline: none;
  border: none;
  color: $font_color;
  font-family: inherit;
  font-size: 1.75rem;
  border-radius: 100px 0px 0px 100px;

  &::placeholder {
    color: transparentize(white, 0.6);
  }

  .chatbox button {
    background: $primary_accent;
    padding: 0 2rem;
    width: 8%;
    height: 70%;
    outline: none;
    border: none;
    color: $font_color;
    border-radius: 0px 100px 100px 0px;
  }

  .chatbox button:hover {
    background: lighten($primary_accent, 50%);
    cursor: pointer;
  }
}
</style>
