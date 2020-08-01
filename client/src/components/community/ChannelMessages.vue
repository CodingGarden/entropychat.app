<template>
  <div class="channel-messages">
    <div class="channel-messages__container">
      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <ChannelMessage :author="'CG-BOT'"
                               :date="'07/02/2020'"
                               :message="'🚨 Stop spamming @ManoloIto'"
                               :hasMention="true"
                               :isBot="true" />
    </div>

    <div class="channel-messages__input-wrapper">
      <form @submit.prevent="sendMessage()">
        <input type="text" placeholder="Message #👋welcome"/>
        <i class="channel-messages__input-wrapper__add" data-feather="plus-circle"></i>
      </form>
    </div>
  </div>
</template>

<script>
import ChannelMessage from '@/components/community/ChannelMessage.vue';
import { onMounted } from '@vue/composition-api';

export default {
  components: {
    ChannelMessage,
  },
  setup() {
    onMounted(() => {
      // eslint-disable-next-line no-undef
      feather.replace();
    });
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
