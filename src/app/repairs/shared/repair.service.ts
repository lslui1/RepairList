import { Injectable } from '@angular/core';

import { REPAIRS } from '../repairs.data';
@Injectable({
  providedIn: 'root'
})
export class RepairService {

  constructor() { }

  getRepairs() {
    return REPAIRS;
  }
}
