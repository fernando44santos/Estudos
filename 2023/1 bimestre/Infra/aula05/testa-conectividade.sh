#!/bin/bash

cat lista-ips.txt |  while read output
do
done
cat lista-ips.txt |  while read output
do
   ping -c 1 "$output" > /dev/null
    if [ $? -eq 0 ]; then
    echo "node $output is up" 
    else
    echo "node $output is down"
    fi
done

