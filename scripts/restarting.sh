#!/bin/bash
ARGS="-P 55056 -p Kdkoefeop390f00330dw"

for i in {6..1}; do 
    let TIME=$i*10
    mcrcon $ARGS "say §6Server will restart in §d$TIME sec."
    sleep 10 
done
mcrcon $ARGS save-all "say §aRESTARTING..." stop
sleep 30
LOAD=$(uptime)
mcrcon $ARGS "say §e$LOAD"