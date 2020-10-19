import { SkillSpeciality } from './skillspeciality';
export interface Skill {
  id: number;
  category: string;
  specialities: SkillSpeciality[];
}

export interface OrderSkillSelection {
  id: number;
  category: string;
  specialities: {
    id: number;
    speciality: string;
  }[];
}




