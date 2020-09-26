<template>
  <button class="button" :class="type">
    <slot />
  </button>
</template>

<script>
export default {
props: {
  type: { type: String, default: "" }
}
};
</script>

<style lang="scss" scoped>
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
.login {
  transition: 
    letter-spacing ease-in-out 200ms, 
    box-shadow ease-in-out 150ms, 
    transform ease-in-out 100ms;
    
  &:hover {
    letter-spacing: .5px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.65);
  }
  &:active {
    background-color: darken($primary, 30%);
    transform: scale(.95);
  }
}
</style>
