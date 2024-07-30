import { Burrito } from './burrito';

export interface OrderItem {
  burrito: Burrito;
  quantity: number;
}
