<template>
  <div class="channel" :class="selected && 'channel--active'">
    <i class="channel__icon" data-feather="hash"></i>
    <span class="channel__name">{{name}}</span>
    <div class="channel__actions" v-if="true">
      <i class="channel__actions__add" data-feather="user-plus"></i>
      <i class="channel__actions__settings" data-feather="settings"></i>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
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
  .channel {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding: 3px 3px;

    border-radius: 5px;

    background-color: transparent;
    transition: background-color 0.3s;

    cursor: pointer;

    &__icon {
      width: 18px;
      height: 18px;

      color: $symbol;
    }

    &__name {
      font-size: 13px;

      margin-left: 5px;

      color: $septenary;
    }

    &__actions {
      visibility: hidden;
      margin-left: auto;

      &__add {
        width: 16px;
        height: 16px;

        color: $symbol;

        cursor: pointer;

        transition: color 0.3s;

        &:hover {
          color: $white;
        }
      }

      &__settings {
        width: 16px;
        height: 16px;

        margin-left: 4px;

        color: $symbol;

        cursor: pointer;

        transition: color 0.3s;

        &:hover {
          color: $white;
        }
      }
    }

    &:hover & {
      background-color: $senary;

      &__name {
        font-weight: bold;
        color: $white;
      }

      &__actions {
        visibility: visible;
      }
    }


  }
</style>
