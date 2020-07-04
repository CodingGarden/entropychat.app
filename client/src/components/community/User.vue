<template>
  <div class="user">
    <div class="avatar" :class="isBot && 'bot'"></div>
    <strong>{{name}}</strong>
    <span v-if="isBot">Bot</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    isBot: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
</style>
