import { Pet } from './pet';

export interface Player {
  id: number;
  name: string;
  no: string;
  server_name: string;
  pets: Array<Pet>;
}
