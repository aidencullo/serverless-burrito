"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const burritoController_1 = require("../controllers/burritoController");
const router = (0, express_1.Router)();
router.get('/burrito', burritoController_1.getBurritos);
exports.default = router;
