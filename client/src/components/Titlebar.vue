<template>
  <div id="menu-bar">
     <div class="app-title" role="menu">
       <img src="../../public/favicon-16x16.png" class="titlebar-logo" />
       <h5>Entropychat</h5>
     </div>
     <div class="right">
       <button class="menubar-btn" id="minimize-btn" @click="minimizeWindow()"><i class="far fa-window-minimize"></i></button>
       <button class="menubar-btn" id="max-unmax-btn" @click="maxUnmaximizeWindow()"><i class="far fa-square"></i></button>
       <button class="menubar-btn" id="close-btn" @click="closeWindow()"><i class="fas fa-times"></i></button>
     </div>
   </div>
</template>

<script>
import * as window from '@/menu-functions.js';

export default {
  methods: {
    minimizeWindow() {
      window.minimizeWindow();
    },
    maxUnmaximizeWindow() {
      window.maxUnmaxWindow();
    },
    closeWindow() {
      window.closeWindow();
    }
  }
}
</script>

<style lang="scss" scoped>
#menu-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  background: $bg_dark;
  -webkit-app-region: drag;
}

#menu-bar > div {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menubar-btn {
  -webkit-app-region: no-drag;
}

.container {
  height: calc(100vh - 30px);
  background: $bg_dark;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
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