module.exports = {
  lintOnSave: false,
  css:{
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/abstracts/_variables.scss";
          `
      }
    }
  },
  productionSourceMap: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.entropychat.app",
        productName: "entropychat.app",
        win: {
          icon: "public/favicon-32x32.png",
          target: [
            {
              target: "nsis",
              arch: ["x64", "ia32"]
            }
          ]
        },
        nsis:{
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true
        },
        publish: [
          {
            provider: "github",
            owner: "w3cj",
            repo: "https://github.com/CodingGarden/entropychat.app",
            releaseType: "draft",
          }
        ]
      }
    }
  }
};
