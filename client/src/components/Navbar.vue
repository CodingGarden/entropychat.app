<template>
  <header class="navbar">
    <Button @click.native="logout()">Log Out</Button>
  </header>
</template>

<script>
import { useActions } from '@u3u/vue-hooks';
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  setup() {
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
@import '../styles/abstracts/variables';

.navbar {
  background: $bg_dark;
  width: 100%;
  height: 70px;
}
</style>
