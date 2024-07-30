#!/bin/bash

TRU=`cat trueInput.txt`
FAL=`cat falseInput.txt`

echo "Output Should be True"
curl -X POST -H "Content-Type: application/json" -d "{\"text\": \"$TRU\", \"model\": \"LR\"}" http://127.0.0.1:5007/predict

echo
echo "#############################"
echo "#############################"
echo

echo "Output Should be False"
curl -X POST -H "Content-Type: application/json" -d "{\"text\": \"$FAL\", \"model\": \"LR\"}" http://127.0.0.1:5007/predict
