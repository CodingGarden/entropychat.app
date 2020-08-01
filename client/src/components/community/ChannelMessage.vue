<template>
  <div class="channel-message">
    <div class="channel-message__avatar" :class="isBot && 'bot'"></div>
    <div class="channel-message__body">
      <div class="channel-message__body__header">
        <strong>{{author}}</strong>
        <span v-if="isBot">Bot</span>
        <time>{{date}}</time>
      </div>
      <div class="channel-message__body__text">{{message}}</div>
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
  .channel-message {
    display: flex;
    align-items: center;

    padding: 8px 16px;
    margin-right: 4px;

    background-color: transparent;

    &__avatar {
      width: 40px;
      height: 40px;

      background-color: $tertiary;
      border-radius: 50%;

      &.bot {
        background-color: $mention-detail;
      }
    }

    &__body {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      min-height: 40px;
      margin-left: 17px;

      &__header {
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

      &__text {
        text-align: left;
        font-size: 14px;

        color: $white;
      }
    }


  }
</style>
