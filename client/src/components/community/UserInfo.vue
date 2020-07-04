<template>
  <div class="user-info">
    <div class="profile">
      <div class="avatar"></div>

      <div class="info">
        <strong>Manolo Ito</strong>
        <span>#1234</span>
      </div>
    </div>

    <div class="user-settings">
      <i data-feather="mic" class="mic"></i>
      <i data-feather="headphones" class="headphone"></i>
      <i data-feather="settings" class="settings"></i>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api';

export default {
  setup() {
    onMounted(() => {
      // eslint-disable-next-line no-undef
      feather.replace();
    });
  },
};
</script>

<style lang="scss">
  .user-info {
    grid-area: USR;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    background-color: $quinary;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

    .profile {
      display: flex;
      align-items: center;

      .avatar {
        width: 32px;
        height: 32px;

        border-radius: 25px;
        background-color: $gray;
      }

      .info {
        display: flex;
        flex-direction: column;

        margin-left: 8px;

        strong {
          color: $white;
          font-size: 13px;
          display: block;
        }

        span {
          color: $gray;
          font-size: 13px;
        }
      }
    }

    .user-settings {
      display: flex;
      align-items: center;

      svg:not(:first-child) {
        margin-left: 7px;
      }

      .mic {
        width: 16px;
        height: 16px;

        color: $white;
        opacity: 0.7;

        cursor: pointer;

        transition: opacity 0.2s;
        &:hover {
          opacity: 1;
        }
      }

      .headphone {
        width: 16px;
        height: 16px;

        color: $white;
        opacity: 0.7;

        cursor: pointer;

        transition: opacity 0.2s;
        &:hover {
          opacity: 1;
        }
      }

      .settings {
        width: 16px;
        height: 16px;

        color: var(--white);
        opacity: 0.7;

        cursor: pointer;

        transition: opacity 0.2s;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
</style>
