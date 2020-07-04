<template>
  <div class="community-channels">
    <div class="category">
      <span>🌱Coding garden</span>
      <i data-feather="plus"></i>
    </div>

    <ChannelButton :name="'👋welcome'" />
    <ChannelButton :name="'🗣introductions'" />
    <ChannelButton :name="'📣announcements'" />
    <ChannelButton :name="'📺new-videos'" />
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api';
import ChannelButton from '@/components/community/ChannelButton.vue';

export default {
  components: {
    ChannelButton,
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

    .category {
      display: flex;
      align-content: center;
      justify-content: space-between;

      margin-bottom: 6px;

      span {
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
