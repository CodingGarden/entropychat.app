<template>
  <div class="communities">
    <CommunityButton :isHome="true" />

    <div class="separator"></div>

    <CommunityButton draggable="true" />
    <CommunityButton :hasNotifications="true" :mentions="1" draggable="true" />
    <CommunityButton draggable="true" />
    <CommunityButton :mentions="1" draggable="true" />
    <CommunityButton :hasNotifications="true" draggable="true" />
    <CommunityButton draggable="true" />
    <CommunityButton draggable="true" />
    <CommunityButton draggable="true" />
    <CommunityButton draggable="true" />
    <CommunityButton draggable="true" />
    <CommunityButton draggable="true" />
  </div>
</template>

<script>
import CommunityButton from '@/components/community/CommunityButton.vue';

export default {
  components: {
    CommunityButton,
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

    .separator {
      width: 32px;

      border-bottom: 2px solid $quinary;
      margin-bottom: 8px;
    }
  }
</style>
