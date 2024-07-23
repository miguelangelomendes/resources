#!/bin/bash
# example call:  ./batata.sh --name test --sources "./ui/Dropdown" "./modules/App/context.tsx" "./utils/countries.ts"
# Parse command line arguments
while [[ $# -gt 0 ]]; do
  key="$1"
  case $key in
  --sources)
    shift
    SOURCES=("$@")
    break
    ;;
  --name)
    shift
    DEST_NAME="$1"
    ;;
  *)
    # Unknown option
    echo "Unknown option: $key"
    exit 1
    ;;
  esac
  shift
done
BATATA=(
  "./ui/Dropdown" "./modules/App/context.tsx" "./utils/countries.ts"
)

echo "BATATA: ${SOURCES[@]}"
echo "Copying files... $SOURCES"
echo "Destination folder: $DEST_NAME"
DEST_DIR="./public/downloads/$DEST_NAME/"

# Function to copy files while preserving directory structure
copy_files() {
  local source=$1
  if [[ -d $source ]]; then
    find "$source" -type f -exec rsync -R {} "$DEST_DIR" \;
  elif [[ -f $source ]]; then
    rsync -R "$source" "$DEST_DIR"
  fi
}

# Iterate over each source and copy files
for SOURCE in "${SOURCES[@]}"; do
  copy_files "$SOURCE"
done
# Zip the destination folder
cd public/downloads/
zip -r "$DEST_NAME.zip" "$DEST_NAME"
rm -rf "$DEST_NAME"
echo "Files copied successfully."
