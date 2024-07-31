#!/bin/bash

# Base URL of the API
BASE_URL="http://localhost:3000/api"

# Test: List Burrito Products
echo "Testing: List Burrito Products"
curl -X GET "$BASE_URL/burrito"
echo -e "\n"

# Test: Submit an Order
echo "Testing: Submit an Order"
curl -X POST "$BASE_URL/orders" \
     -H "Content-Type: application/json" \
     -d '{
           "items": [
             {
               "burritoId": 1,
               "quantity": 1
             },
             {
               "burritoId": 2,
               "quantity": 1
             }
           ],
           "totalCost": 8
         }'
echo -e "\n"

# Test: Retrieve Order Details
ORDER_ID=123 # Replace with the actual order ID from the submit order response
echo "Testing: Retrieve Order Details for Order ID $ORDER_ID"
curl -X GET "$BASE_URL/orders/$ORDER_ID"
echo -e "\n"
