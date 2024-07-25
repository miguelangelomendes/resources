#!/bin/bash

./before_build.sh
docker build -t registry.299natola.fun/resources:latest .
docker push registry.299natola.fun/resources:latest

curl -X POST -k -H "Content-Type: application/x-www-form-urlencoded" -H "X-API-Key: ptr_vorejxm/lOIlael13IzmS5PJV5Q1SN5/Jk7/nc+TSpY=" -d "endpointId=2" "http://192.168.1.176:9000/api/stacks/4/stop"
curl -X POST -k -H "Content-Type: application/x-www-form-urlencoded" -H "X-API-Key: ptr_vorejxm/lOIlael13IzmS5PJV5Q1SN5/Jk7/nc+TSpY=" -d "endpointId=2" "http://192.168.1.176:9000/api/stacks/4/start"
