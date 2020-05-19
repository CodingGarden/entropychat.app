module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/abstracts/_variables.scss";
          `
      }
    }
  }
};
