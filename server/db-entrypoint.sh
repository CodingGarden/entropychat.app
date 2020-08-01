#!/bin/bash

################################################################################
# Name          : db-entrypoint.sh
# Args          : OPTIONAL 1) filename
# Description   : Initialization script for mongodb
################################################################################

# VARIABLES
LOG_DIR=${1:-/var/log/mongodb}
LOG_FILE=${2:-${LOG_DIR}/mongod.log}

# MAIN
> "${LOG_FILE}"
chown -R mongodb:mongodb "${LOG_DIR}"
/usr/local/bin/docker-entrypoint.sh --logpath "${LOG_FILE}" --filePermissions 777 --logappend
