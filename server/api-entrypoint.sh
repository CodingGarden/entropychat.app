#!/bin/sh

################################################################################
# Name          : api-entrypoint.sh
# Args          : OPTIONAL 1) filename 2) last number of lines 3) sleep for
# Description   : Initialization script for nodejs application
################################################################################

# VARIABLES
LOG_FILE=${1:-/mongod.log}
TAIL_LINES=${2:-20}
SLEEP=${3:-2}

# MAIN
while :
do 
  [[ -f ${LOG_FILE} ]] && 
    tail -n ${TAIL_LINES} ${LOG_FILE} | grep -q 'waiting for connections on port 27017' ${LOG_FILE} && 
    break || echo '[INFO] Waiting for mongodb to be available'
    sleep ${SLEEP}
done

pm2-runtime start ecosystem.config.js