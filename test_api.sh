#!/bin/bash

# Base URL for the API
BASE_URL="http://localhost:3000/api"

echo "--------------------------------------"
echo "Creating a new burrito..."
echo "--------------------------------------"
curl -X POST "$BASE_URL/burrito" \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Chicken Burrito",
        "size": "regular",
        "price": 3
    }'

echo

echo "--------------------------------------"
echo "Listing all burritos..."
echo "--------------------------------------"
curl -X GET "$BASE_URL/burrito" \
    -H "Accept: application/json"

echo

# Replace with the actual ID of the burrito you created
BURRITO_ID="1"  # Change this ID based on your actual burrito ID

echo "--------------------------------------"
echo "Getting details of burrito with ID $BURRITO_ID..."
echo "--------------------------------------"
curl -X GET "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Accept: application/json"

echo

echo "--------------------------------------"
echo "Updating burrito with ID $BURRITO_ID..."
echo "--------------------------------------"
curl -X PUT "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Updated Chicken Burrito",
        "size": "XL",
        "price": 5
    }'

echo

echo "--------------------------------------"
echo "Deleting burrito with ID $BURRITO_ID..."
echo "--------------------------------------"
curl -X DELETE "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Accept: application/json"
