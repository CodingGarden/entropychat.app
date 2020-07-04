<template>
  <button :class="[ 'community-button',
                    isHome && 'home' || 'notHome',
                    hasNotifications && 'notification',
                    mentions > 0 && 'mention', ]">
    <span v-if="isHome"><img src="@/assets/logo-white.png" /></span>
  </button>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
    isHome: {
      type: Boolean,
      default: false,
    },
    hasNotifications: {
      type: Boolean,
      default: false,
    },
    mentions: Number,
  },
};
</script>

<style lang="scss">
  .community-button {
    width: 48px;
    height: 48px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    margin-bottom: 8px;

    background-color: $secondary;

    cursor: pointer;

    position: relative;

    border-radius: 25px;

    img {
      width: 32px;
      height: 32px;
    }

    transition: border-radius .3s, background-color .3s;

    &.active, &:hover {
      border-radius: 15px;
    }

    &.home {
      background-color: $primary;

      &.active, &:hover {
        background-color: $green;
      }
    }

    &.notHome {
      &.active, &:hover {
        background-color: $discord;
      }
    }

    &.notification {
      &::before {
        content: '';

        width: 9px;
        height: 9px;

        position: absolute;
        left: -17px;
        top: calc(50% - 4.5px);

        background-color: $white;
        border-radius: 25px;
      }
    }

    &.mention {
      &::after {
        // TODO: Bind to computed property or something
        content: '1';

        width: auto;
        height: 16px;

        position: absolute;
        bottom: -4px;
        right: -4px;

        background-color: $notification;
        border-radius: 12px;
        padding: 0 4px;

        border: 4px solid $quinary;

        text-align: right;
        font-size: 13px;
        font-weight: bold;

        color: $white;
      }
    }
  }
</style>
