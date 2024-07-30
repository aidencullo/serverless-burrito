import { Request, Response } from 'express';
import { Order } from '../models/order';
import { OrderItem } from '../models/orderItem';

let orders: Order[] = [];
let nextId = 1;

export const getOrders = (req: Request, res: Response) => {
  res.json(orders);
};

export const submitOrder = (req: Request, res: Response) => {
  const { items }: { items: OrderItem[] } = req.body;
  const totalCost = items.reduce((sum, item) => sum + item.burrito.price * item.quantity, 0);

  const newOrder: Order = {
    id: nextId++,
    items,
    totalCost
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
};

export const getOrderById = (req: Request, res: Response) => {
  const { id } = req.params;
  const order = orders.find(o => o.id === parseInt(id));
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};
