import { Request, Response } from 'express';

let burritos = [
    {
        id: '1',
        name: 'Bean and Cheese',
        price: 5.99
    },
    {
        id: '2',
        name: 'Carne Asada',
        price: 7.99
    },
    {
        id: '3',
        name: 'Carnitas',
        price: 7.99
    }
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
    newBurrito.id = String(burritos.length + 1);
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
