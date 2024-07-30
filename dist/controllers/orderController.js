"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.submitOrder = exports.getOrders = void 0;
let orders = [];
let nextId = 1;
const getOrders = (req, res) => {
    res.json(orders);
};
exports.getOrders = getOrders;
const submitOrder = (req, res) => {
    const { items } = req.body;
    const totalCost = items.reduce((sum, item) => sum + item.burrito.price * item.quantity, 0);
    const newOrder = {
        id: nextId++,
        items,
        totalCost
    };
    orders.push(newOrder);
    res.status(201).json(newOrder);
};
exports.submitOrder = submitOrder;
const getOrderById = (req, res) => {
    const { id } = req.params;
    const order = orders.find(o => o.id === parseInt(id));
    if (order) {
        res.json(order);
    }
    else {
        res.status(404).json({ message: 'Order not found' });
    }
};
exports.getOrderById = getOrderById;
