<template>
  <div>
    <div id="title-bar-windows" v-if="os === 'win32'">
      <div role="menu">
        <img src="../../public/favicon-16x16.png" class="titlebar-logo" />
        <h5>Entropychat</h5>
      </div>
      <div class="right">
        <button class="titlebar-btn" id="minimize-btn" @click="minimizeWindow()">
          <i class="far fa-window-minimize"></i>
        </button>
        <button class="titlebar-btn" id="max-unmax-btn" @click="resizeWindow()">
          <i class="far fa-square"></i>
        </button>
        <button class="titlebar-btn" id="close-btn" @click="closeWindow()">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
    <div id="title-bar-linux" v-else>
      <div class="titlebar">
        <div class="buttons">
          <div class="close" @click="closeWindow()">
            <a class="close-button">
              <span>&times;</span>
            </a>
          </div>
          <div class="minimize" @click="minimizeWindow()">
            <a class="minimize-button">
              <span>&ndash;</span>
            </a>
          </div>
          <div class="maximize" @click="resizeWindow()">
            <a class="maximize-button">
              <span>+</span>
            </a>
          </div>
        </div>
        <div>
          <img src="../../public/favicon-16x16.png" class="titlebar-logo" />
          <span>Entropychat</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as appWindow from "@/window-functions.js";

export default {
  data() {
    return {
      os: ""
    };
  },
  methods: {
    minimizeWindow() {
      appWindow.minimizeWindow();
    },
    resizeWindow() {
      appWindow.resizeWindow();
    },
    closeWindow() {
      appWindow.closeWindow();
    }
  },
  created() {
    this.os = appWindow.getOsPlatform(); //Change to win32 / linux / darwin to test other versions of titlebar.
  }
};
</script>

<style lang="scss" scoped>
.titlebar-logo {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

#title-bar-windows {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  background: $bg_dark;
  -webkit-app-region: drag;

  div {
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
}

#title-bar-linux {
  a {
    text-decoration: none;
  }

  span {
    line-height: 9px;
    vertical-align: 50%;
  }

  .titlebar {
    margin-top: 3px;
    text-align: center;
    font-size: 11pt;
    width: 100%;
    height: 20px;
    -webkit-app-region: drag;
    cursor: default;
  }

  .buttons {
    padding-left: 8px;
    padding-top: 3px;
    float: left;
    line-height: 0px;
    -webkit-app-region: no-drag;
  }

  .buttons:hover a {
    visibility: visible;
  }

  .close {
    background: #ff5c5c;
    font-size: 9pt;
    width: 11px;
    height: 11px;
    border: 1px solid #e33e41;
    border-radius: 50%;
    display: inline-block;
  }

  .close:active {
    background: #c14645;
    border: 1px solid #b03537;
  }

  .close:active .close-button {
    color: #4e0002;
  }

  .close-button {
    color: #820005;
    visibility: hidden;
    cursor: default;
  }

  .minimize {
    background: #ffbd4c;
    font-size: 9pt;
    line-height: 11px;
    margin-left: 4px;
    width: 11px;
    height: 11px;
    border: 1px solid #e09e3e;
    border-radius: 50%;
    display: inline-block;
  }

  .minimize:active {
    background: #c08e38;
    border: 1px solid #af7c33;
  }

  .minimize:active .minimize-button {
    color: #5a2607;
  }

  .minimize-button {
    color: #9a5518;
    visibility: hidden;
    cursor: default;
  }

  .maximize {
    background: #00ca56;
    font-size: 9pt;
    line-height: 11px;
    margin-left: 6px;
    width: 11px;
    height: 11px;
    border: 1px solid #14ae46;
    border-radius: 50%;
    display: inline-block;
  }

  .maximize:active {
    background: #029740;
    border: 1px solid #128435;
  }

  .maximize:active .maximize-button {
    color: #003107;
  }

  .maximize-button {
    color: #006519;
    visibility: hidden;
    cursor: default;
  }
}
</style>