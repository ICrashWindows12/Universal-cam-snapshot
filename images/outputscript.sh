#!/bin/bash

# RTSP stream URL
RTSP_URL="rtsp://user:password@0.0.0.0:PORT/examplestream"
# Directory to save the current image
IMAGE_DIR="/var/www/html/images"
# Current image filename
CURRENT_IMAGE="current_status.jpeg"

# Create the directory if it doesn't exist
mkdir -p "$IMAGE_DIR"

while true; do
    # Capture a single frame from the RTSP stream and save it as current_status.jpeg
    ffmpeg -rtsp_transport tcp -i "$RTSP_URL" -vframes 1 "$IMAGE_DIR/$CURRENT_IMAGE" -y

    # Wait for 60 seconds before capturing the next frame
    sleep 60.02

    # After 70 seconds, delete the current image (this will delete the image after 70 seconds from the last capture)
    if [ -f "$IMAGE_DIR/$CURRENT_IMAGE" ]; then
        sleep 0.01  # Wait an additional 10 seconds (70 seconds total since last capture)
        rm "$IMAGE_DIR/$CURRENT_IMAGE"
    fi
done
