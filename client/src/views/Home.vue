<template>
  <div class="home">
    <div class="container">
      <img src="https://i.imgur.com/KQDKLRa.png">
      <Button 
        v-if="!loading && !user"
        class="mt-2"
        @click.native="loginWithGithub()"
        type="login"
      >
        <span class="mr-1">Login with Github</span>
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      </Button>
      <Loading v-if="loading && !user" />
    </div>
  </div>
</template>

<script>
import { watch } from '@vue/composition-api';
import { useState, useActions, useRouter } from '@u3u/vue-hooks';
import Button from '@/components/Button.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'Home',
  components: {
    Button,
    Loading,
  },
  setup() {
    const { router } = useRouter();

    const { user, loading } = useState('auth', [
      'user',
      'loading',
    ]);

    const { loginWithGithub } = useActions('auth', [
      'loginWithGithub',
    ]);

    watch(user, () => {
      if (user.value) {
        console.log('user!', user.value);
        router.push('/messages');
      }
    });

    return {
      user,
      loading,
      loginWithGithub,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background: $bg;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
