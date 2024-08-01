#!/bin/bash

# Base URL for the API
BASE_URL="http://localhost:3000/api"

# API key
API_KEY="c7f9e8d1e6a3b1c2d4a5f7e9c0b1a2d3e4f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u"

# Common Authorization header
AUTH_HEADER="Authorization: Bearer $API_KEY"

# Burrito API endpoints

# Create a new burrito
echo "Creating a new burrito..."
curl -X POST "$BASE_URL/burrito" \
    -H "Content-Type: application/json" \
    -H "$AUTH_HEADER" \
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
    -H "Accept: application/json" \
    -H "$AUTH_HEADER"
echo

# Update a burrito (replace with actual ID)
echo "Updating burrito with ID $BURRITO_ID..."
curl -X PUT "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Content-Type: application/json" \
    -H "$AUTH_HEADER" \
    -d '{
        "name": "Updated Chicken Burrito",
        "size": "XL",
        "price": 5
    }'
echo

# Delete a burrito (replace with actual ID)
echo "Deleting burrito with ID $BURRITO_ID..."
curl -X DELETE "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Accept: application/json" \
    -H "$AUTH_HEADER"
echo

# Unauthorized request tests

# Unauthorized request (missing Authorization header)
echo "Testing unauthorized request (missing Authorization header)..."
curl -X GET "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Accept: application/json"
echo

# Unauthorized request (incorrect API key)
echo "Testing unauthorized request (incorrect API key)..."
WRONG_API_KEY="invalidapikey"
WRONG_AUTH_HEADER="Authorization: Bearer $WRONG_API_KEY"

curl -X GET "$BASE_URL/burrito/$BURRITO_ID" \
    -H "Accept: application/json" \
    -H "$WRONG_AUTH_HEADER"
echo

# Order API endpoints

# Create a new order (replace with actual Burrito ID and quantity)
BURRITO_ID="1"
QUANTITY="2"
TOTAL_COST=$((3 * QUANTITY))
echo "Submitting a new order..."
curl -X POST "$BASE_URL/orders" \
    -H "Content-Type: application/json" \
    -H "$AUTH_HEADER" \
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
    -H "Accept: application/json" \
    -H "$AUTH_HEADER"
echo

# Update an order (replace with actual ID)
echo "Updating order with ID $ORDER_ID..."
curl -X PUT "$BASE_URL/orders/$ORDER_ID" \
    -H "Content-Type: application/json" \
    -H "$AUTH_HEADER" \
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
    -H "Accept: application/json" \
    -H "$AUTH_HEADER"
echo
