<template>
  <div id="title-bar">
     <div role="menu">
       <img src="../../public/favicon-16x16.png" class="titlebar-logo" />
       <h5>Entropychat</h5>
     </div>
     <div class="right">
       <button class="titlebar-btn" id="minimize-btn" @click="minimizeWindow()"><i class="far fa-window-minimize"></i></button>
       <button class="titlebar-btn" id="max-unmax-btn" @click="resizeWindow()"><i class="far fa-square"></i></button>
       <button class="titlebar-btn" id="close-btn" @click="closeWindow()"><i class="fas fa-times"></i></button>
     </div>
   </div>
</template>

<script>
import * as window from '@/window-functions.js';

export default {
  methods: {
    minimizeWindow() {
      window.minimizeWindow();
    },
    resizeWindow() {
      window.resizeWindow();
    },
    closeWindow() {
      window.closeWindow();
    }
  }
}
</script>

<style lang="scss" scoped>
#title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  background: $bg_dark;
  -webkit-app-region: drag;
}

#title-bar > div {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.titlebar-btn {
  -webkit-app-region: no-drag;
}

button {
  height: 100%;
  padding: 0 15px;
  border: none;
  background: transparent;
  outline: none;
}

button:hover {
  background: rgba(221, 221, 221, 0.2);
}

#close-btn:hover {
  background: rgb(255, 0, 0);
}

button i {
  color: white;
}

.titlebar-logo {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>