<template>
  <div class="user-list">
    <span class="user-list__role">Pruners - 11</span>
    <div>
      <User :name="'John Doe'"></User>
      <User :name="'Jane Doe'"></User>
    </div>

    <span class="user-list__role">Avocados - 1</span>
    <div>
        <User :name="'Eliot Carrillo'"></User>
    </div>

    <span class="user-list__role">Twitch subscriber: tier-3 - 1</span>
    <div>
        <User :name="'Braden Larson'"></User>
    </div>

    <span class="user-list__role">Fertilizers - 4</span>
    <div>
        <User :name="'Arjan Nunez'"></User>
    </div>

    <span class="user-list__role">Twitch subscriber: tier 2 - 2</span>
    <div>
        <User :name="'Kayson Fenton'"></User>
    </div>

    <span class="user-list__role">Twitch subscriber: tier 1 - 40</span>
    <div>
        <User :name="'Miya Milne'"></User>
        <User :name="'Alby Coleman'"></User>
        <User :name="'Yanis Cohen'"></User>
        <User :name="'Cari Edge'"></User>
        <User :name="'Bayley Montoya'"></User>
        <User :name="'Kaynan Busby'"></User>
    </div>

    <span class="user-list__role">Online - 1</span>
    <div>
        <User :name="'CG-BOT'" :isBot="true"></User>
    </div>
  </div>
</template>

<script>
import User from '@/components/community/User.vue';
import { onMounted } from '@vue/composition-api';

export default {
  components: {
    User,
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
  .user-list {
    grid-area: CUL;

    display: flex;
    flex-direction: column;

    padding: 3px 6px 0 16px;

    background-color: $tertiary;

    max-height: calc(100vh - 46px);

    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: $quaternary;
    }

    &::-webkit-scrollbar-track {
      background-color: $tertiary;
    }

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &__role {
      margin-top: 20px;

      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;

      color: $gray;
    }
  }
</style>
