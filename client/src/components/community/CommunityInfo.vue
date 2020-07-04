<template>
  <div class="community-info">
    <i data-feather="hash"></i>
    <h1>👋welcome</h1>
    <div class="separator"></div>
    <span class="description">This is the beginning of this community</span>
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
  .community-info {
    grid-area: COI;

    display: flex;
    align-items: center;

    padding: 0 17px;

    background-color: $secondary;

    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;

    z-index: 2;

    h1 {
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

    .separator {
      width: 1px;
      height: 24px;

      margin: 0 13px;

      background-color: $white;
      opacity: 0.2;
    }

    .description {
      font-size: 15px;
      color: $gray;
    }
  }
</style>
