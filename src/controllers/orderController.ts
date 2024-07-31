import { Request, Response } from 'express';

let orders: any[] = [];
let orderIdCounter = 1;

export const getOrders = (req: Request, res: Response) => {
    res.json(orders);
};

export const submitOrder = (req: Request, res: Response) => {
    const newOrder = req.body;

    if (!newOrder.items || !newOrder.totalCost) {
        return res.status(400).json({ error: 'Invalid order data' });
    }

    newOrder.id = orderIdCounter++;
    orders.push(newOrder);

    res.status(201).json(newOrder);
};

export const getOrderById = (req: Request, res: Response) => {
    const { id } = req.params;
    const order = orders.find(o => o.id === parseInt(id, 10));
    if (!order) {
        return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
};

export const updateOrder = (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedOrder = req.body;
    if (!updatedOrder.items || !updatedOrder.totalCost) {
        return res.status(400).json({ error: 'Invalid order data' });
    }
    const index = orders.findIndex(o => o.id === parseInt(id, 10));
    if (index === -1) {
        return res.status(404).json({ error: 'Order not found' });
    }
    orders[index] = { id: parseInt(id, 10), ...updatedOrder };
    res.json(orders[index]);
};

export const deleteOrder = (req: Request, res: Response) => {
    const { id } = req.params;
    const index = orders.findIndex(o => o.id === parseInt(id, 10));
    if (index === -1) {
        return res.status(404).json({ error: 'Order not found' });
    }
    orders.splice(index, 1);
    res.status(204).send();
};
