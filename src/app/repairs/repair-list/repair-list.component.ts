import { Component, OnInit } from '@angular/core';
import { Repair } from '../repair.model';
import { REPAIRS } from '../repairs.data';
import { RepairService } from '../shared/repair.service';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent implements OnInit {
  repairs: Repair[];

  constructor(private repairService: RepairService) { }

  ngOnInit(): void {
    this.getRepairs();
  }

  getRepairs() {
    this.repairs = this.repairService.getRepairs();
  }

  parentFunctionHandler(repair) {
    console.log('Repair ' + repair.name + ' was flagged as completed');
  }
}
