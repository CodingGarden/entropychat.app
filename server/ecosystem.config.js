module.exports = {
  apps: [
    {
      name: 'api',
      script: './src/index.js',
      watch: true,
      ignore_watch: ['node_modules', 'docker-data'],
    },
  ],
};
