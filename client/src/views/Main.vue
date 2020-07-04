<template>
  <main class="main">
    <Communities />
    <CommunityName />
    <CommunityInfo />
    <CommunityChannels />
    <UserInfo />
    <CommunityChannelMessages />
    <CommunityUserList />
  </main>
</template>

<script>
import Communities from '@/components/community/Communities.vue';
import CommunityName from '@/components/community/CommunityName.vue';
import CommunityInfo from '@/components/community/CommunityInfo.vue';
import CommunityChannels from '@/components/community/CommunityChannels.vue';
import UserInfo from '@/components/community/UserInfo.vue';
import CommunityChannelMessages from '@/components/community/CommunityChannelMessages.vue';
import CommunityUserList from '@/components/community/CommunityUserList.vue';

export default {
  name: 'Main',
  components: {
    Communities,
    CommunityName,
    CommunityInfo,
    CommunityChannels,
    UserInfo,
    CommunityChannelMessages,
    CommunityUserList,
  },
};
</script>

<style lang="scss">
  .main {
    height: 100vh;

    display: grid;

    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;

    // COM - communities
    // CON - community name
    // COI - community information
    // COC - community channels
    // CCM - community channel messages
    // CUL - community user list
    // USR - user info
    grid-template-areas: 'COM CON COI COI'
                         'COM COC CCM CUL'
                         'COM USR CCM CUL';
  }
</style>
