#!/bin/bash

# Define the parent directories where you want to delete files
PARENT_DIRS=(
    "app_data"
    "config"
)

# Define the file extensions to delete
EXTENSIONS=("*.pdf" "*.json")
echo "cleaning start..."
# Loop through each parent directory
for PARENT_DIR in "${PARENT_DIRS[@]}"; do
    # Loop through each extension and delete the matching files in the current parent directory and its subdirectories
    for EXT in "${EXTENSIONS[@]}"; do
        find "$PARENT_DIR" -name "$EXT" -type f -exec rm -f {} +
    done
done

# Run the build command
echo "cleaning stop..."
echo "Building the application..."
# npm run build  # Change this to your actual build command
