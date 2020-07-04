<template>
  <div class="channel-button" :class="selected && 'active'">
    <div>
      <i data-feather="hash" class="hashtag"></i>
      <span>{{name}}</span>
    </div>
    <div class="actions" v-if="true">
      <i data-feather="user-plus" class="add"></i>
      <i data-feather="settings" class="settings"></i>
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
  .channel-button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 3px;

    border-radius: 5px;

    background-color: transparent;
    transition: background-color 0.3s;

    cursor: pointer;

    .actions {
      visibility: hidden;
    }

    div {
      display: flex;
      align-items: center;
    }

    div span {
      font-size: 13px;

      margin-left: 5px;

      color: $septenary;
    }

    &:hover {
      background-color: $senary;
      // padding: 3px 3px;

      div span {
        font-weight: bold;
        color: $white;
      }

      div.actions {
        visibility: visible;
      }
    }

    .hashtag {
      width: 18px;
      height: 18px;

      color: $symbol;
    }

    .add {
      width: 16px;
      height: 16px;

      color: $symbol;

      cursor: pointer;

      transition: color 0.3s;

      &:hover {
        color: $white;
      }
    }

    .settings {
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
</style>
