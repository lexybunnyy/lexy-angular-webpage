#!/bin/bash
## sudo apt-get install imagemagick

# List of directories containing the images
INPUT_DIRECTORIES=("./assets/referenciak/ajto" "./assets/referenciak/butor")
# List of corresponding directories to save resized and cropped images
OUTPUT_DIRECTORIES=("./assets/referenciak_mini_fooldal/ajto" "./assets/referenciak_mini_fooldal/butor")
# Desired dimensions
TARGET_SIZE=220
# Function to resize and crop images
resize_and_crop_image() {
    local INPUT_IMAGE=$1
    local OUTPUT_IMAGE=$2
    local TARGET_SIZE=$3

    # Resize the image so that the smaller dimension is 205 pixels
    convert "$INPUT_IMAGE" -resize "${TARGET_SIZE}x${TARGET_SIZE}^" -gravity center -extent "${TARGET_SIZE}x${TARGET_SIZE}" "$OUTPUT_IMAGE"
}

# Ensure the input and output directories lists have the same length
if [ ${#INPUT_DIRECTORIES[@]} -ne ${#OUTPUT_DIRECTORIES[@]} ]; then
    echo "The number of input directories and output directories must be the same."
    exit 1
fi

# Loop through all specified directories
for i in "${!INPUT_DIRECTORIES[@]}"; do
    INPUT_DIRECTORY=${INPUT_DIRECTORIES[$i]}
    OUTPUT_DIRECTORY=${OUTPUT_DIRECTORIES[$i]}

    # Create the output directory if it doesn't exist
    mkdir -p $OUTPUT_DIRECTORY

    # Loop through all JPEG and PNG files in the current directory
    for IMAGE in "$INPUT_DIRECTORY"/*.{jpg,jpeg,png}; do
        # Skip if no files found
        if [ ! -e "$IMAGE" ]; then
            continue
        fi

        # Get the filename without the path
        FILENAME=$(basename "$IMAGE")

        # Define the output image path
        OUTPUT_IMAGE="$OUTPUT_DIRECTORY/$FILENAME"

        # Resize and crop the image
        resize_and_crop_image "$IMAGE" "$OUTPUT_IMAGE" $TARGET_SIZE

        echo "Resized and cropped $IMAGE -> $OUTPUT_IMAGE"
    done
done

echo "All images resized and cropped to ${TARGET_SIZE}x${TARGET_SIZE} and saved to their respective directories."
