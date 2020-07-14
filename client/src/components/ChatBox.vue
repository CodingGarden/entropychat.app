<template>
  <form class="chatbox" @submit.prevent="sendMessage()">
    <input v-model="message" class="chatbox__input" placeholder="Send on hella Message" />
    <button type="submit" class="chatbox__button" name="send">
      <img src="@/assets/icons/send.png" alt="send">
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
      'user',
    ]);

    const { createMessage } = useActions('messages', [
      'createMessage',
    ]);

    const sendMessage = () => {
      createMessage({
        text: message.value,
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
.chatbox__button {
  background: $primary_accent;
  padding: 0 2rem;
  width: 8%;
  height: 70%;
  outline: none;
  border: none;
  color: $font_color;
  border-radius: 0px 100px 100px 0px;
}

.chatbox_button:hover {
  background: lighten($primary_accent, 50%);
  cursor: pointer;
}

.chatbox__button img{
  max-height: 70%;
}

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
}
</style>
