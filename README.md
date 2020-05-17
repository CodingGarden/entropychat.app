![entropychat.app](assets/logo.png)

A discord clone made by the Coding Garden Community.

https://entropychat.app

## Tech Stack

* Frontend
  * Vue.js / Vuex / Vue Router
  * SCSS
  * FeathersJS Client
* Backend
  * FeathersJS / Socket.io / Express
* Login
  * Github OAuth

![demo](assets/demo.gif)

## Server Setup

* Copy the [server/.env.sample](server/.env.sample) file to `server/.env` and update the values.
  * You can obtain a github client id and secret here:
    * https://github.com/settings/applications/new
  * The authorization callback URL should be set to:
    * http://localhost:3030/oauth/github/callback
      * Change the port if your feathers backend is running on a different port
* The oauth flow requires that the client is running at:
  * http://localhost:8080
  * If your client is running on a different port, you will need to update [server/public/index.html](server/public/index.html) to allow sending messages to the correct port / origin

## Credits

* Name / Logo / favicon by [shidotmoe](https://github.com/ShiDotMoe)
* Design / layout by [cccccccccccccccccnrd](https://github.com/cccccccccccccccccnrd)
