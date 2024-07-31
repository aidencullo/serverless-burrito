#!/bin/bash


# Base URL for the API
BASE_URL="http://localhost:3000/api"


# Burrito API endpoints

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


echo


# Order API endpoints


# Example Burrito ID (Replace with the actual ID after creating burritos)
BURRITO_ID="1"  # Change this ID based on your actual burrito ID
QUANTITY="2"    # Adjust quantity as needed

# Calculate total cost based on burrito price and quantity (assuming $3 per burrito)
TOTAL_COST=$((3 * QUANTITY))

# Create a new order
echo "--------------------------------------"
echo "Submitting a new order..."
echo "--------------------------------------"
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


# List all orders
echo "--------------------------------------"
echo "Listing all orders..."
echo "--------------------------------------"
curl -X GET "$BASE_URL/orders" \
    -H "Accept: application/json"


echo


# Replace with the actual ID of the order you submitted
ORDER_ID="1"  # Change this ID based on your actual order ID


# Get details of a specific order
echo "--------------------------------------"
echo "Getting details of order with ID $ORDER_ID..."
echo "--------------------------------------"
curl -X GET "$BASE_URL/orders/$ORDER_ID" \
    -H "Accept: application/json"


echo


# Update a specific order (Replace with actual order ID and modify as needed)
echo "--------------------------------------"
echo "Updating order with ID $ORDER_ID..."
echo "--------------------------------------"
curl -X PUT "$BASE_URL/orders/$ORDER_ID" \
    -H "Content-Type: application/json" \
    -d '{
        "items": [
            {
                "burritoId": "'$BURRITO_ID'",
                "quantity": 3
            }
        ],
        "totalCost": 9
    }'

echo


# Delete a specific order (Replace with actual order ID)
echo "--------------------------------------"
echo "Deleting order with ID $ORDER_ID..."
echo "--------------------------------------"
curl -X DELETE "$BASE_URL/orders/$ORDER_ID" \
    -H "Accept: application/json"
