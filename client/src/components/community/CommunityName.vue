<template>
  <div class="community-name">
    <h1>CodingGardenWithCJ</h1>
    <i data-feather="chevron-down"></i>
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
  .community-name {
    grid-area: CON;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 13px;

    background-color: $tertiary;

    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;

    z-index: 2;

    h1 {
      font-size: 16px;
      font-weight: bold;
      color: $white;
    }

    svg {
      width: 24px;
      height: 24px;

      color: $white;
      cursor: pointer;
    }
  }
</style>
