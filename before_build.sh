#!/bin/bash

# Path to the JSON file
json_file="./utils/files_config.json"

# Get the names of the files to be downloaded
names=$(jq -r '.[] | .output' $json_file)

# Iterate over each name and call batata.sh with the corresponding sources
for name in $names; do
  echo $name
  # Extract the filesPath property from the objects in the JSON array that have a fileName equal to the current name
  sources=$(jq -r --arg name "$name" 'map(select(.output == $name).sources)| .[] | .[]' $json_file)
  ./generate_files.sh --name $name --sources $sources
  echo $sources
done
