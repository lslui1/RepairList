import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Repair } from '../repair.model';
// import { REPAIRS } from '../repairs.data';

@Injectable({
  providedIn: 'root'
})
export class RepairService {
  url = 'http://localhost:5558/repairs';

  constructor(private http: HttpClient) { }

  getRepairs(): Observable<Repair[]> {
    return this.http.get<Repair[]>(this.url);
  }
}
