#!/bin/bash
ARGS="-P 55056 -p examplepassword"

LOAD=$(uptime)
mcrcon $ARGS "say §e$LOAD"