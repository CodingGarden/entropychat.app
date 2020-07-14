const { remote } = require('electron');

function getCurrentWindow() {
  return remote.getCurrentWindow();
}

function minimizeWindow(window = getCurrentWindow()) {
  if (window.minimizable) {
    window.minimize();
  }
}

function resizeWindow(window = getCurrentWindow()) {
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
}

function closeWindow(window = getCurrentWindow()) {
  window.close();
}

module.exports = {
  getCurrentWindow,
  minimizeWindow,
  resizeWindow,
  closeWindow,
};