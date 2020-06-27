#!/bin/bash
echo '========================================================================='
echo "> use $MONGO_INITDB_DATABASE;"
echo "> db.createCollection('users');"
mongo <<EOF 
  use $MONGO_INITDB_DATABASE;
  db.createCollection('users');
EOF
echo '========================================================================='
