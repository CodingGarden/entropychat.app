<template>
  <div class="channel-topbar">
    <i data-feather="hash"></i>
    <h1 class="channel-topbar__title">👋welcome</h1>
    <div class="channel-topbar__separator"></div>
    <span class="channel-topbar__description">This is the beginning of this community</span>
    <Button class="channel-topbar__logout" @click.native="logout()">Log Out</Button>
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api';
import { useActions } from '@u3u/vue-hooks';
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  setup() {
    onMounted(() => {
      // eslint-disable-next-line no-undef
      feather.replace();
    });

    const { logout } = useActions('auth', [
      'logout',
    ]);

    return {
      logout,
    };
  },
};
</script>

<style lang="scss">
  .channel-topbar {
    grid-area: COI;

    display: flex;
    align-items: center;

    padding: 0 17px;

    background-color: $secondary;

    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;

    z-index: 2;

    &__title {
      font-size: 16px;
      font-weight: bold;

      margin-left: 9px;

      color: $white;
    }

    svg {
      width: 24px;
      height: 24px;

      color: $symbol;
    }

    &__separator {
      width: 1px;
      height: 24px;

      margin: 0 13px;

      background-color: $white;
      opacity: 0.2;
    }

    &__description {
      font-size: 15px;
      color: $gray;
    }

    &__logout {
      font-size: 1rem !important;
      margin-left: auto;
    }
  }
</style>
