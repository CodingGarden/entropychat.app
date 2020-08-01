<template>
  <div class="user-item">
    <div class="user-item__avatar" :class="isBot && 'user-item__avatar--bot'"></div>
    <span class="user-item__name">{{name}}</span>
    <span class="user-item__category" v-if="isBot">Bot</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
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
    .user-item {
      margin-top: 5px;
      padding: 5px;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      cursor: pointer;

      font-size: 13px;

      border-radius: 4px;

      background: transparent;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }

      &__name {
        margin-left: 13px;

        font-weight: 500;

        color: $white;

        opacity: 0.7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      &__category {
        margin-left: 9px;

        background-color: $discord;

        color: $white;

        border-radius: 4px;

        padding: 4px 5px;

        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
      }

      &__avatar {
        flex-shrink: 0;

        width: 32px;
        height: 32px;

        border-radius: 25px;
        background-color: $secondary;

        &--bot {
          background-color: $mention-detail;
        }
      }
    }
</style>
