#!/bin/bash

# Base URL for the API
BASE_URL="http://localhost:3000/api"

# Burrito API endpoints

# Create a new burrito
echo "Creating a new burrito..."
curl -X POST "$BASE_URL/burrito" \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Chicken Burrito",
        "size": "regular",
        "price": 3
    }'
echo

# Get details of a burrito (replace with actual ID)
BURRITO_ID="1"
echo "Getting details of burrito with ID $BURRITO_ID..."
curl -X GET "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Accept: application/json"
echo

# Update a burrito (replace with actual ID)
echo "Updating burrito with ID $BURRITO_ID..."
curl -X PUT "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Content-Type: application/json" \
    -d '{
        "name": "Updated Chicken Burrito",
        "size": "XL",
        "price": 5
    }'
echo

# Delete a burrito (replace with actual ID)
echo "Deleting burrito with ID $BURRITO_ID..."
curl -X DELETE "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Accept: application/json"
echo

# Order API endpoints

# Create a new order (replace with actual Burrito ID and quantity)
BURRITO_ID="1"
QUANTITY="2"
TOTAL_COST=$((3 * QUANTITY))
echo "Submitting a new order..."
curl -X POST "$BASE_URL/orders" \
    -H "Content-Type: application/json" \
    -d '{
        "items": [
            {
                "burritoId": "'$BURRITO_ID'",
                "quantity": '$QUANTITY'
            }
        ],
        "totalCost": '$TOTAL_COST'
    }'
echo

# Get details of an order (replace with actual ID)
ORDER_ID="1"
echo "Getting details of order with ID $ORDER_ID..."
curl -X GET "$BASE_URL/orders/$ORDER_ID" \
    -H "Accept: application/json"
echo

# Update an order (replace with actual ID)
echo "Updating order with ID $ORDER_ID..."
curl -X PUT "$BASE_URL/orders/$ORDER_ID" \
    -H "Content-Type: application/json" \
    -d '{
        "items": [
            {
                "burritoId": "'$BURRITO_ID'",
                "quantity": '$QUANTITY'
            }
        ],
        "totalCost": '$TOTAL_COST'
    }'
echo

# Delete an order (replace with actual ID)
echo "Deleting order with ID $ORDER_ID..."
curl -X DELETE "$BASE_URL/orders/$ORDER_ID" \
    -H "Accept: application/json"
echo
