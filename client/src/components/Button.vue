<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import '../styles/abstracts/variables';

.button {
  background: $primary;
  color: $font_color;
  font-family: $font_family;
  padding: 0.5rem 2rem;
  font-size: 1.5rem;
  outline: none;
  border: none;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    box-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 1);
  }
}
</style>
