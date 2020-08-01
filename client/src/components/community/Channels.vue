<template>
  <div class="community-channels">
    <div class="community-channels__category">
      <span class="community-channels__name">🌱Coding garden</span>
      <i data-feather="plus"></i>
    </div>

    <Channel :name="'👋welcome'" />
    <Channel :name="'🗣introductions'" />
    <Channel :name="'📣announcements'" />
    <Channel :name="'📺new-videos'" />
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api';
import Channel from '@/components/community/Channel.vue';

export default {
  components: {
    Channel,
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
  .community-channels {
    grid-area: COC;

    display: flex;
    flex-direction: column;

    padding: 24px 9px 0 16px;

    background-color: $tertiary;

    &__category {
      display: flex;
      align-content: center;
      justify-content: space-between;

      margin-bottom: 6px;

      &__name {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;

        color: $gray
      }

      svg {
        width: 21px;
        height: 21px;

        color: $symbol;
        cursor: pointer;
      }
    }

  }
</style>
