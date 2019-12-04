import { Component, OnInit } from '@angular/core';
import { Repair } from '../repair.model';
import { REPAIRS } from '../repairs.data';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs: Repair[];

  constructor() { }

  ngOnInit() {
    this.repairs = REPAIRS;
  }

  parentFunctionHandler(repair) {
    console.log('Repair ' + repair.name + ' was flagged as completed');
  }
}
