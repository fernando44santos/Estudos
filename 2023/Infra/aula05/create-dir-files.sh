#!/bin/bash
DIR=dirteste
FILE=arquivo

for i in $(seq 1 10)
do
	d="$DIR$i"
	mkdir "$d"
	for j in $(seq 1 5)
	do
		f="$FILE$j"
		touch "$d/$f"
	done
done

