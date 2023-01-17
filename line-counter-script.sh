#!/bin/bash

a=$(ls)
p=$(pwd)
read -a elements <<< $a
echo ${#elements[*]}
echo "give the file name you want to calcule"
read filesearched
l=$(wc ${elements[0]})
for element in "${elements[@]}"; do
  if [ $element == $filesearched ]
    then
        test=$(wc -l $element)
        read -a lineCounter <<< $test
        echo ${lineCounter[0]}
  fi
done


