module.exports = {
  apps: [
    {
      name: 'api',
      script: './src/index.js',
      instance_var: '1',
      watch: true,
      ignore_watch: ['node_modules', 'docker-data'],
    },
  ],
};
