"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const router = (0, express_1.Router)();
router.get('/orders', orderController_1.getOrders);
router.post('/orders', orderController_1.submitOrder);
router.get('/orders/:id', orderController_1.getOrderById);
exports.default = router;
