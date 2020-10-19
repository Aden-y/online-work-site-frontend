import { Address } from './address';
import {Skill} from './skill';

export interface User {
  id: number;
  username: string;
  password: string;
  type: string;
  address: Address;
  firstname: string;
  middlename: string;
  lastname: string;
  idnumber: number;
  email: string;
  phonenumber: string;

}
export interface Freelancer extends User {
  educationlevel: {
    level: string;
    certificate: string;
  };
  experiencelevel: {
    level: string;
    docs: string;
  };
  skills: Skill[];
}

