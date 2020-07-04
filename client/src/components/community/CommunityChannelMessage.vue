<template>
  <div class="community-channel-message">
    <div class="avatar" :class="isBot && 'bot'"></div>
    <div class="message">
      <div class="header">
        <strong>{{author}}</strong>
        <span v-if="isBot">Bot</span>
        <time>{{date}}</time>
      </div>
      <div class="content">{{message}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    isBot: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
  .community-channel-message {
    display: flex;
    align-items: center;

    padding: 8px 16px;
    margin-right: 4px;

    background-color: transparent;

    .avatar {
      width: 40px;
      height: 40px;

      background-color: $tertiary;
      border-radius: 50%;

      &.bot {
        background-color: $mention-detail;
      }
    }

    .message {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      min-height: 40px;
      margin-left: 17px;
    }

    .header {
      display: flex;
      align-items: center;

      strong {
        font-size: 14px;

        color: $white;
      }

      span {
        padding: 4px 5px;
        margin-left: 6px;

        border-radius: 4px;

        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;

        background-color: $discord;
        color: $white;
      }

      time {
        margin-left: 6px;
        font-size: 11px;

        color: $gray;
      }
    }

    .content {
      text-align: left;
      font-size: 14px;

      color: $white;
    }
  }
</style>
