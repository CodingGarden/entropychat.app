<template>
  <div class="message">
    <div class="message__avatar">
      <img :src="message.user.image">
    </div>
    <div class="message__contents">
      <div class="message__info">{{message.user.name}} <small>{{new Date(message.createdAt).toLocaleString()}}</small></div>
      <div class="message__text">{{message.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message'],
};
</script>

<style lang="scss">
.message {
  display: flex;

  &__contents {
    width: 100%;
    margin: 1rem;
  }

  &__avatar {
    margin: 0.5rem;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>
