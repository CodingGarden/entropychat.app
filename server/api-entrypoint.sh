#!/bin/sh

################################################################################
# Name          : api-entrypoint.sh
# Args          : OPTIONAL 1) filename 2) last number of lines 3) sleep for
# Description   : Initialization script for nodejs application
################################################################################

# VARIABLES
LOG_DIR=${1:-/var/log/mongodb}
LOG_FILE=${2:-${LOG_DIR}/mongod.log}
TAIL_LINES=${3:-20}
SLEEP=${4:-1}

# MAIN
while :
do 
  [[ -f "${LOG_FILE}" ]] && 
    tail -n "${TAIL_LINES}" "${LOG_FILE}" | grep -q 'waiting for connections on port 27017' "${LOG_FILE}" && 
    break || echo '[INFO] Waiting for mongodb...'
    sleep ${SLEEP}
done

pm2-runtime start ecosystem.config.js