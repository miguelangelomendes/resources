#!/bin/bash

./before_build.sh
docker build -t registry.299natola.fun/resources:latest .
docker push registry.299natola.fun/resources:latest
