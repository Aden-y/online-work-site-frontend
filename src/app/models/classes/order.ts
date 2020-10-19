import { User, Freelancer } from './user';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Skill } from './skill';
import { Bid } from './bid';

export interface Order {
  id: number;
  topic: string;
  description: Text;
  files: OrderFile[];
  skills_needed: Skill[];
  budget: number;
  price: number;
  bidding_instructions: Text;
  experience_requirements: string;
  rating_requirements: number;
  client: User;
  freelancer: Freelancer;
  deadline: Date;
  status: string;
  created_at: Date;
  updated_at: Date;

  messages: Message[];
  bids: Bid[];
  submissions: OrderSubmission[];
}


export interface OrderSubmission {
  path: string;
  created_at: Date;
  updated_at: Date;
}

export interface OrderFile {
  path: string;
  created_at: Date;
  updated_at: Date;
}
