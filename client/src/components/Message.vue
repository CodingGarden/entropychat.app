<template>
  <div>
    <div class="message">
      <div class="message__avatar">
        <img :src="message.user.image" />
      </div>
      <div class="message__contents">
        <ReactionBox />
        <div class="message__info">
          {{message.user.name}}
          <small>{{new Date(message.createdAt).toLocaleString()}}</small>
        </div>
        <div class="message__text">{{message.text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ReactionBox from "./ReactionBox";

export default {
  props: ["message"],
  components: {
    ReactionBox
  }
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

.message:hover {
  background-color: $bg_dark;
  .reaction-box {
    visibility: visible;
  }
}

.reaction-box {
  float: right;
  visibility: hidden;
}
</style>
