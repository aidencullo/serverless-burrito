"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBurritos = void 0;
const burritos = [
    { id: 1, name: 'Chicken Burrito', size: 'regular', price: 3 },
    { id: 2, name: 'Chicken Burrito', size: 'XL', price: 5 }
];
const getBurritos = (req, res) => {
    res.json(burritos);
};
exports.getBurritos = getBurritos;
