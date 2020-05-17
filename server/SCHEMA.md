- Users

- Servers
  - owner_id -> User

- Server Admins
  - server_id -> Server
  _ user_id -> User

- Server Members
  - server_id -> Server
  - user_id -> User

- Server Invites
  - server_id -> Server
  - invite_code: string

- Server Channels
  - server_id -> Server
  - mod_only: boolean
  - read_only: boolean

- Messages
  - server_id -> Server
  - channel_id -> Channel
  - sender_id -> User

## TODO LATER:

* Voice Chat
* Emoji Reactions on Messages
* User Mentions on Messages
* Bot Accounts / Automation
* Direct Messages
* Friend List
* Image Uploads
