#!/bin/bash

################################################################################
# Name          : db-entrypoint.sh
# Args          : OPTIONAL 1) filename
# Description   : Initialization script for mongodb
################################################################################

# VARIABLES
LOG_FILE=${1:-/mongod.log}

# MAIN
> ${LOG_FILE}
/usr/local/bin/docker-entrypoint.sh --logpath ${LOG_FILE} --filePermissions 777 --logappend