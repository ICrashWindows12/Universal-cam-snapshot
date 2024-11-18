#!/bin/bash

# RTSP stream URL
RTSP_URL="rtsp://username:password@0.0.0.0:PORT/examplestream" # REPLACE THIS WITH YOUR ACTUAL RTSP URL
# Directory to save the current image
IMAGE_DIR="/var/www/html/images"
# Current image filename
CURRENT_IMAGE="current_status.jpeg"

# Create the directory if it doesn't exist
mkdir -p "$IMAGE_DIR"

# Ask user whether to preserve snapshots or discard them
read -p "Do you want to preserve snapshots? (y/n): " choice

if [[ "$choice" == "y" ]]; then
    # Preserve Snapshots
    while true; do
        # rename a single frame from the RTSP stream and save it as current_status_DD/MM/YY.jpeg
         TIMESTAMP=$(date +'%d-%m-%Y_%H-%M-%S')
        mv "$IMAGE_DIR/$CURRENT_IMAGE" "$IMAGE_DIR/current_status_$TIMESTAMP.jpeg"

        # Wait for 1 seconds before taking snapshot
        sleep 1

        # Rename the current image with a timestamp
         # Capture a single frame from the RTSP stream and save it as current_status.jpeg
        ffmpeg -rtsp_transport tcp -i "$RTSP_URL" -vframes 1 "$IMAGE_DIR/$CURRENT_IMAGE" -y

        # Wait for 60 second before renaming the current status image
        sleep 60
    done
else
    # Discard Snapshots
    while true; do
        # Capture a single frame from the RTSP stream and save it as current_status.jpeg
        ffmpeg -rtsp_transport tcp -i "$RTSP_URL" -vframes 1 "$IMAGE_DIR/$CURRENT_IMAGE" -y

        # Wait for 60 seconds before capturing the next frame
        sleep 60
    done
fi
