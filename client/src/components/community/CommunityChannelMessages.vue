<template>
  <div class="community-channel-messages">
    <div class="messages">
      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'Manolo Ito'"
                               :date="'07/02/2020'"
                               :message="'This is a test message'" />

      <CommunityChannelMessage :author="'CG-BOT'"
                               :date="'07/02/2020'"
                               :message="'🚨 Stop spamming @ManoloIto'"
                               :hasMention="true"
                               :isBot="true" />
    </div>

    <div class="input-wrapper">
      <input type="text" placeholder="Message #👋welcome"/>
      <i data-feather="plus-circle" class="add"></i>
    </div>
  </div>
</template>

<script>
import CommunityChannelMessage from '@/components/community/CommunityChannelMessage.vue';
import { onMounted } from '@vue/composition-api';

export default {
  components: {
    CommunityChannelMessage,
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
  .community-channel-messages {
    grid-area: CCM;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: $secondary;

    .messages {
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

    .input-wrapper {
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
          top: -47%;
          left: 10px;
          transition: 180ms ease-in-out;
        }
      }

      .input-icon {
        width: 24px;
        height: 24px;

        color: $gray;
      }
    }
  }
</style>
