import { Request, Response } from 'express';

let burritoIdCounter = 1;
let burritos: any[] = [];

export const getBurritos = (req: Request, res: Response) => {
    console.log(burritos);
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
