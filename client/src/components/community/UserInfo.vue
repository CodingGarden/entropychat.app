<template>
  <div class="user">
    <div class="user__profile">
      <div class="user__profile__avatar"></div>

      <div class="user__profile__info">
        <strong class="user__profile__info__name">Manolo Ito</strong>
        <span class="user__profile__info__id">#1234</span>
      </div>
    </div>

    <div class="user__actions">
      <!-- TODO -->
      <!-- It was mentioned on stream we'll need to use the svg icons rather than png from assets folder -->
      <!-- I'm leaving this comment as a reminder and keeping feather icons to illustrate how it will look like -->
      <span class="user__actions__mic"><i data-feather="mic"></i></span>
      <span class="user__actions__headphone"><i data-feather="headphones"></i></span>
      <span class="user__actions__settings"><i data-feather="settings"></i></span>
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
  .user {
    grid-area: USR;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;

    background-color: $quinary;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;

    &__profile {
      display: flex;
      align-items: center;

      &__avatar {
        width: 32px;
        height: 32px;

        border-radius: 25px;
        background-color: $gray;
      }

      &__info {
        display: flex;
        flex-direction: column;

        margin-left: 8px;

        &__name {
          color: $white;
          font-size: 13px;
          display: block;
        }

        &__id {
          color: $gray;
          font-size: 13px;
        }
      }
    }

    &__actions {
      display: flex;
      align-items: center;

      span:not(:first-child) {
        margin-left: 7px;
      }

      &__mic > svg {
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

      &__headphone > svg {
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

      &__settings > svg {
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
