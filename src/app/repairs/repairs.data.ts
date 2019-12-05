import { Repair } from './repair.model';

export const REPAIRS: Repair[] = [
  {
    id: 1,
    name: 'car sway bar bushings',
    type: 'car',
    priority: 'Low',
    status: 'Incomplete',
    completed: false
  },
  {
    id: 2,
    name: 'Window flashing leak',
    type: 'home',
    priority: 'High',
    status: 'Incomplete',
    completed: false
  },
  {
    id: 3,
    name: 'Garden Fencing',
    type: 'landscape',
    priority: 'High',
    status: 'Completed',
    completed: true
  },
  {
    id: 4,
    name: 'Fertalize',
    type: 'landscape',
    priority: 'Low',
    status: 'Completed',
    completed: true
  }
];
