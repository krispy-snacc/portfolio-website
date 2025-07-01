#!/bin/bash

# https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg

# Input file with one icon name per line
INPUT_FILE="icons.txt"

# Output directories
ORIGINAL_DIR="./original"
PLAIN_DIR="./plain"

# Create directories if they don't exist
mkdir -p "$ORIGINAL_DIR"
mkdir -p "$PLAIN_DIR"

# Base URL
BASE_URL="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

# Read each line from the input file
while IFS= read -r icon; do
    if [[ -n "$icon" ]]; then
        original_url="$BASE_URL/$icon/${icon}-original.svg"
        plain_url="$BASE_URL/$icon/${icon}-plain.svg"

        echo "Downloading: $icon"

        curl -sSf "$original_url" -o "$ORIGINAL_DIR/${icon}-original.svg" \
            && echo "✓ $icon-original" \
            || echo "✗ $icon-original not found"

        curl -sSf "$plain_url" -o "$PLAIN_DIR/${icon}-plain.svg" \
            && echo "✓ $icon-plain" \
            || echo "✗ $icon-plain not found"
    fi
done < "$INPUT_FILE"
