import { Topping } from './topping';

export interface Burrito {
    id: number;
    name: string;
    size: string;
    price: number;
    toppings: Topping[];
}
