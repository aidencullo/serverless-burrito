import { Request, Response } from 'express';
import { Burrito } from '../models/burrito';
import { Topping } from '../models/topping';

let burritoIdCounter = 1;
let burritos: any[] = [
    {
        id: burritoIdCounter++,
        name: 'Chicken Burrito',
        size: 'Large',
        price: 9.99,
        toppings: [Topping.BlackOlives, Topping.Rice]
    } as Burrito,
    {
        id: burritoIdCounter++,
        name: 'Beef Burrito',
        size: 'Medium',
        price: 7.99,
        toppings: [Topping.SourCream]
    } as Burrito,
];

export const getBurritos = (req: Request, res: Response) => {
    res.json(burritos);
};

export const getBurritoById = (req: Request, res: Response) => {
    const burrito = burritos.find(b => b.id === req.params.id);
    if (burrito) {
        res.json(burrito);
    } else {
        res.status(404).json({ error: 'Burrito not found' });
    }
};

export const createBurrito = (req: Request, res: Response) => {
    const newBurrito = req.body;

    if (!newBurrito.name || !newBurrito.size || !newBurrito.price) {
        return res.status(400).json({ error: 'Invalid burrito data' });
    }

    newBurrito.id = String(burritoIdCounter++);
    burritos.push(newBurrito);

    res.status(201).json(newBurrito);
};
export const updateBurrito = (req: Request, res: Response) => {
    const burritoIndex = burritos.findIndex(b => b.id === req.params.id);
    if (burritoIndex !== -1) {
        burritos[burritoIndex] = { ...burritos[burritoIndex], ...req.body };
        res.json(burritos[burritoIndex]);
    } else {
        res.status(404).json({ error: 'Burrito not found' });
    }
};

export const deleteBurrito = (req: Request, res: Response) => {
    const burritoIndex = burritos.findIndex(b => b.id === req.params.id);
    if (burritoIndex !== -1) {
        burritos.splice(burritoIndex, 1);
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Burrito not found' });
    }
};
