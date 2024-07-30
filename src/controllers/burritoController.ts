import { Request, Response } from 'express';
import { Burrito } from '../models/burrito';

const burritos: Burrito[] = [
  { id: 1, name: 'Chicken Burrito', size: 'regular', price: 3 },
  { id: 2, name: 'Chicken Burrito', size: 'XL', price: 5 }
];

export const getBurritos = (req: Request, res: Response) => {
  res.json(burritos);
};
