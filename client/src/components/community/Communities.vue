<template>
  <div class="communities">
    <Community :isHome="true" />

    <div class="communities__separator"></div>

    <Community draggable="true" />
    <Community :hasNotifications="true" :mentions="1" draggable="true" />
    <Community draggable="true" />
    <Community :mentions="1" draggable="true" />
    <Community :hasNotifications="true" draggable="true" />
    <Community draggable="true" />
    <Community draggable="true" />
    <Community draggable="true" />
    <Community draggable="true" />
    <Community draggable="true" />
    <Community draggable="true" />
  </div>
</template>

<script>
import Community from '@/components/community/Community.vue';

export default {
  components: {
    Community,
  },
};
</script>

<style lang="scss">
  @import '@/styles/abstracts/_variables.scss';

  .communities {
    grid-area: COM;

    max-height: 100vh;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: $quaternary;
    padding: 11px 0;

    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    &__separator {
      width: 32px;

      border-bottom: 2px solid $quinary;
      margin-bottom: 8px;
    }
  }
</style>
