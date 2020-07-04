<template>
  <div class="community-user-list">
    <span class="role">Pruners - 11</span>
    <div>
      <User :name="'John Doe'"></User>
      <User :name="'Jane Doe'"></User>
    </div>

    <span class="role">Avocados - 1</span>
    <div>
        <User :name="'Eliot Carrillo'"></User>
    </div>

    <span class="role">Twitch subscriber: tier-3 - 1</span>
    <div>
        <User :name="'Braden Larson'"></User>
    </div>

    <span class="role">Fertilizers - 4</span>
    <div>
        <User :name="'Arjan Nunez'"></User>
    </div>

    <span class="role">Twitch subscriber: tier 2 - 2</span>
    <div>
        <User :name="'Kayson Fenton'"></User>
    </div>

    <span class="role">Twitch subscriber: tier 1 - 40</span>
    <div>
        <User :name="'Miya Milne'"></User>
        <User :name="'Alby Coleman'"></User>
        <User :name="'Yanis Cohen'"></User>
        <User :name="'Cari Edge'"></User>
        <User :name="'Bayley Montoya'"></User>
        <User :name="'Kaynan Busby'"></User>
    </div>

    <span class="role">Online - 1</span>
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
  .community-user-list {
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

    .role {
      margin-top: 20px;

      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;

      color: $gray;
    }

    .user {
      margin-top: 5px;
      padding: 5px;

      display: flex;
      align-items: center;

      cursor: pointer;

      font-size: 13px;

      border-radius: 4px;

      background: transparent;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }

      strong {
        margin-left: 13px;

        font-weight: 500;

        color: $white;

        opacity: 0.7;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      span {
        margin-left: 9px;

        background-color: $discord;

        color: $white;

        border-radius: 4px;

        padding: 4px 5px;

        text-transform: uppercase;
        font-weight: bold;
        font-size: 11px;
      }

      .avatar {
        flex-shrink: 0;

        width: 32px;
        height: 32px;

        border-radius: 25px;
        background-color: $secondary;

        &.bot {
          background-color: $mention-detail;
        }
      }
    }

  }
</style>
