import { Repair } from './repair.model';

export const REPAIRS: Repair[] = [
  {
    id: 1,
    name: 'car sway bar bushings',
    priority: 'Low',
    status: 'Incomplete',
    completed: false
  },
  {
    id: 2,
    name: 'Window flashing leak',
    priority: 'High',
    status: 'Incomplete',
    completed: false
  },
  {
    id: 3,
    name: 'Garden Fencing',
    priority: 'High',
    status: 'Completed',
    completed: true
  },
  {
    id: 4,
    name: 'Fertalize',
    priority: 'Low',
    status: 'Completed',
    completed: true
  }
];
