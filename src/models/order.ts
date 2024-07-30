import { OrderItem } from './orderItem';

export interface Order {
  id: number;
  items: OrderItem[];
  totalCost: number;
}
