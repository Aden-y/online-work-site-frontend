import { Freelancer } from './user';
import { Order } from './order';

export interface Bid
{
  id: number;
  freelancer: Freelancer;
  order: Order;
  amount: number;
  created_at: Date;
  updated_at: Date;
}
